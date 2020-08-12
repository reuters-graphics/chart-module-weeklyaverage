import { getDates, round } from './utils/utils';

import ChartComponent from './base/ChartComponent';
import Mustache from 'mustache';
import d3 from './utils/d3';
import D3Locale from '@reuters-graphics/d3-locale';

// import {round} from 'lodash'

// import defaultData from './defaultData.json';

class WeeklyAverage extends ChartComponent {
  defaultProps = {
    stroke: '#eec331',
    strokeWidth: 2.5,
    fill: 'rgba(255, 255, 255, 0.3)',
    height: 200,
    avg_days: 7,
    annotations: [],
    population: false,
    bars: true,
    padding: 0,
    labels: false,
    x_axis: true,
    variable_name: 'cases',
    date_range: [],
    left_y_axis: false,
    margin: {
      left: 20, right: 50, top: 10, bottom: 30,
    },
    text: {
      daily_numbers: 'Daily new {{ variable }}',
      tooltip_suffix: '{{ number }} new {{ variable }}',
      avg: '{{ average }}-day average',
      per_pop_tt: '{{ number }} new {{ variable }} per 100k people in the population',
      subhed: '',
      no_data: 'No reported {{ variable }}',
    },
    locale: 'en',
    chart_formats: {
      // Format number for axis
      number: ',',

      // Format number for tooltip
      number_tooltip: ',',

      // Date on tooltip
      date_tooltip: '%B %e',

      // Date format for the x axis
      date: '%b %e',
    },
  };

  defaultData = [];

  draw() {
    let data = this.data();
    const props = this.props();
    const node = this.selection().node();
    const locale = new D3Locale(props.locale);
    const dateParse = d3.timeParse('%Y-%m-%d');
    const dateFormat = locale.formatTime(props.chart_formats.date);
    const dateFormatMatch = locale.formatTime('%Y-%m-%d');
    const dateFormatTT = locale.formatTime(props.chart_formats.date_tooltip);
    const numberFormatTT = locale.format(props.chart_formats.number_tooltip);
    const numberFormat = locale.format(props.chart_formats.number);

    let dateList = [];
    let yRange;
    let allDates = [];

    const { width } = node.getBoundingClientRect();
    const transition = d3.transition()
      .duration(750);

    if (props.text.subhed.length > 0) {
      this.selection()
        .appendSelect('h6.chart-title')
        .text(props.text.subhed);
    }

    const gOuter = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height);

    const g = gOuter.appendSelect('g.container')
      .attr('transform', `translate(${props.margin.left}, ${props.margin.top})`);

    if (d3.sum(data, d => d.count) > 0) {
      this.selection().select('.no-data').remove();

      if (props.date_range.length > 1) {
        const startDate = dateParse(props.date_range[0]);
        const endDate = dateParse(props.date_range[1]);

        if (startDate < endDate && endDate <= d3.max(data, d => dateParse(d.date))) {
          data = data.filter(d => dateParse(d.date) >= startDate && dateParse(d.date) <= endDate);
          dateList = getDates(startDate, endDate);
        } else {
          dateList = getDates(dateParse(data[0].date), dateParse(data[data.length - 1].date));
        }
      } else {
        dateList = getDates(dateParse(data[0].date), dateParse(data[data.length - 1].date));
      }

      dateList.forEach(function(d) {
        const o = data.filter(e => e.date === dateFormatMatch(d));

        const obj = {
          date: d,
        };

        if (!o[0]) {
          obj.count = 0;
        } else {
          obj.count = o[0].count;
        }

        allDates.push(obj);
      });

      allDates = allDates.sort((a, b) => (d3.descending(a.date, b.date)));

      allDates.forEach(function(d, i) {
        d.use_count = (props.population) ? (d.count / props.population * 100000) : d.count;
        d.use_count = d.use_count < 0 ? 0 : d.use_count;
        d.mean = d3.mean(allDates.slice(i, (i + props.avg_days)), d => +d.count < 0 ? 0 : d.count); // avg calc
        d.use_mean = (props.population) ? (d.mean / props.population * 100000) : d.mean;
        d.use_mean = d.use_mean < 0 ? 0 : d.use_mean;
      });

      // x scale
      const scaleX = d3.scaleBand()
        .round(false)
        .range([0, width - props.margin.right - props.margin.left])
        .domain(dateList)
        .padding(props.padding);

      if (props.bars) {
        yRange = d3.extent(allDates, d => +d.use_count);
      } else {
        yRange = d3.extent(allDates, d => +d.use_mean);
      }

      // y scale
      const scaleY = d3.scaleLinear()
        .range([props.height - props.margin.bottom - props.margin.top, 0])
        .domain(yRange);

      // line
      const line = d3.line()
        .x(d => scaleX(d.date))
        .y(d => scaleY(d.use_mean ? d.use_mean : 0))
        .curve(d3.curveMonotoneX);

      const area = d3.area()
        .x(d => scaleX(d.date))
        .y1(d => scaleY(+d.use_count))
        .y0(scaleY(0))
        .curve(d3.curveStep);

      if (props.x_axis) {
        g.appendSelect('g.axis--x')
          .attr('class', 'axis--x axis')
          .transition(transition)
          .attr('transform', `translate(0,${props.height - props.margin.bottom - props.margin.top})`)
          .call(d3.axisBottom(scaleX).tickValues([dateList[0], dateList[dateList.length - 1]]).tickFormat(dateFormat));
      }

      if (props.bars) {
        const bars = g.appendSelect('g.bars-container')
          .selectAll('.area')
          .data([allDates]);

        bars
          .enter()
          .append('path')
          .attr('transform',`translate(${scaleX.bandwidth()/2},0)`)
          .attr('class', 'area')
          .merge(bars)
          .transition(transition)
          .style('fill', props.fill)
          .attr('d', area);

        bars.exit()
          .transition(transition)
          .remove();

        g.appendSelect('rect.highlight-bar');

        const barsDummy = g.appendSelect('g.dummy-container')
          .selectAll('.dummy')
          .data(allDates, (d, i) => d.date);

        barsDummy.enter()
          .append('rect')
          .style('fill', 'white')
          .attr('class', 'dummy')
          .style('opacity', 0)
          .attr('height', d => props.height)
          .attr('x', (d, i) => scaleX(d.date))
          .attr('y', d => 0)
          .attr('width', scaleX.bandwidth())
          .on('mouseover', showTooltip)
          .on('mouseout', hideTooltip)
          .merge(barsDummy)
          .transition(transition)
          .attr('height', d => props.height)
          .attr('x', (d, i) => scaleX(d.date))
          .attr('y', d => 0)
          .attr('width', scaleX.bandwidth());

        barsDummy.exit()
          .transition(transition)
          .attr('height', 0)
          .remove();

        barsDummy.on('mouseover', showTooltip)
          .on('mouseout', hideTooltip);
      }

      // avg line
      const avgLine = g.selectAll('.avg-line')
        .data([allDates]);

      avgLine.enter()
        .append('path')
        .attr('class', 'avg-line')
        .merge(avgLine)
        .transition(transition)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', props.stroke)
        .attr('stroke-width', props.strokeWidth);

      // LABELS
      if (props.labels) {
        const labelContainer = g.appendSelect('g.labels');
        const useDay = 30;
        let anchor = 'middle';
        const labelX = scaleX(allDates[useDay].date);
        if (labelX < ((width - props.margin.left - props.margin.right) * 0.18)) {
          anchor = 'start';
        }
        // avg label
        const avgLabel = labelContainer.appendSelect('g.avg-label')
          .attr('transform', `translate(${scaleX(allDates[useDay].date)},${scaleY(allDates[useDay].use_mean) - props.height / 20})`);

        avgLabel.appendSelect('line')
          .attr('x1', 0)
          .attr('x2', 0)
          .attr('y1', props.height / 20)
          .attr('y2', 0);

        avgLabel.appendSelect('text')
          .attr('dx', -10)
          .attr('dy', -5)
          .style('text-anchor', anchor)
          .text(Mustache.render(props.text.avg, { average: props.avg_days }));

        // new numbers label

        // GET MAX

        if (props.bars) {
          const max = d3.max(allDates, d => d.use_count);
          const maxVar = allDates.filter(d => d.use_count == max)[0];
          const newNosLabel = labelContainer.appendSelect('g.new-nos-label')
            .attr('transform', `translate(${scaleX(maxVar.date)},${scaleY(maxVar.use_count)})`);

          newNosLabel.appendSelect('line')
            .attr('x1', -10)
            .attr('x2', 0)
            .attr('y1', 10)
            .attr('y2', 10);

          newNosLabel.appendSelect('text')
            .style('text-anchor', 'end')
            .attr('dx', -13)
            .attr('dy', 12)
            .text(Mustache.render(props.text.daily_numbers, { variable: props.variable_name }));
        }
      }

      if (props.left_y_axis) {
        const labelContainer = g.appendSelect('g.labels');
        const max = d3.max(allDates, d => d.use_mean);
        const maxVar = allDates.filter(d => d.use_mean === max)[0];
        const maxPlotVal = round(maxVar.use_mean,0)
        const newNosLabel = labelContainer.appendSelect('g.new-nos-label')
          .attr('transform', `translate(${scaleX(maxVar.date)},${scaleY(maxPlotVal)})`);

        newNosLabel.appendSelect('line')
          .attr('x1', -10)
          .attr('x2', 0)
          .attr('y1', 0)
          .attr('y2', 0);

        newNosLabel.appendSelect('text')
          .style('text-anchor', 'end')
          .attr('dx', -10)
          .attr('dy', 4)
          .text(numberFormatTT(maxPlotVal));

      } else {
        let ticks;
        if (yRange[1] === 2) {
          ticks = 2;
        } else if (!props.bars || yRange[1] ===1 ) {
          ticks = 1;
        } else {
          ticks = 3;
        }

        g.appendSelect('g.axis--y')
          .attr('class', 'axis--y axis')
          .transition(transition)
          .attr('transform', `translate(${width - props.margin.right - props.margin.left},0)`)
          .call(d3.axisRight(scaleY).ticks(ticks).tickFormat(numberFormat));

        g.select('.axis--y').selectAll('.tick').each(function(d) {
          if (d === 0) {
            this.remove();
          }
        });
      }
      // tooltip
      const tooltipBox = this.selection()
        .appendSelect('div.custom-tooltip');

      const ttInner = tooltipBox.appendSelect('div.tooltip-inner');

      function showTooltip(obj) {
        const TooltipText = props.population ? props.text.per_pop_tt : props.text.tooltip_suffix;
        const formatFunction = props.population ? round : numberFormatTT;
        d3.select(this)
          .attr('height', d => scaleY(0) - scaleY(+d.use_count))
          .attr('y', d => scaleY(+d.use_count))
          .classed('active', true);

        const coords = [];

        coords[0] = scaleX(obj.date) + props.margin.left + (scaleX.bandwidth() / 2);
        coords[1] = scaleY(obj.use_count) + props.margin.top;

        const q = getTooltipType(coords, [props.height, width]);

        tooltipBox.classed('tooltip-active', true)
          .classed('tooltip-ne tooltip-s tooltip-n tooltip-sw tooltip-nw tooltip-se', false)
          .style('left', `${coords[0]}px`)
          .style('top', `${coords[1]}px`)
          .classed(`tooltip-${q}`, true);

        ttInner.appendSelect('div.tt-header')
          .text(dateFormatTT(obj.date));

        ttInner.appendSelect('div.tt-row')
          .text(Mustache.render(TooltipText, { variable: props.variable_name, number: formatFunction(obj.use_count) }));
      }

      function hideTooltip() {
        g.select('.active')
          .attr('height', d => props.height)
          .attr('y', d => 0)
          .classed('active', false);
        tooltipBox.classed('tooltip-active', false);
      }

      function getTooltipType(coords, size) {
        const l = [];
        const ns_threshold = 4;

        if (coords[1] > size[1] / ns_threshold) {
          l.push('s');
        } else {
          l.push('n');
        }

        if (coords[0] > size[0] / 2) {
          l.push('e');
        }

        if (coords[0] < size[0] / 2) {
          l.push('w');
        }

        return l.join('');
      }

      // Annotations
      // Reposition if already on the page
      const annotationCheck = !!g.selectAll('g.annotations-container').node();

      props.annotations = props.annotations.filter(function(d) {
        if (scaleX(dateParse(d.date)) && d.text.length > 1) {
          return d;
        }
      });

      if (props.annotations.length > 0 || annotationCheck) {
        const annotationsContainer = g.appendSelect('g.annotations-container')
          .selectAll('.annotation')
          .data(props.annotations, (d, i) => d.date);

        const annotation = annotationsContainer.enter()
          .append('g')
          .attr('class', d => d.class ? `annotation ${d.class}` : 'annotation')
          .attr('transform', d => `translate(${scaleX(dateParse(d.date))},0)`);

        annotationsContainer.merge(annotationsContainer)
          .transition(transition)
          .attr('transform', d => `translate(${scaleX(dateParse(d.date))},0)`);

        annotation.appendSelect('line')
          .attr('x1', 0)
          .attr('x2', 0)
          .attr('y2', function(d) {
            if (scaleX(dateParse(d.date)) > (width / 2)) {
              return props.height / 6 * 1.5 - 10;
            } else {
              return props.height / 6 * 4 - 10;
            }
          })
          .attr('y1', props.height - props.margin.top - props.margin.bottom);

        const textContainer = annotation.appendSelect('g.text-container')
          .attr('transform', function(d) {
            if (scaleX(dateParse(d.date)) > (width / 2)) {
              return `translate(-8,${props.height / 6 * 1.5})`;
            } else {
              return `translate(8,${props.height / 6 * 4})`;
            }
          })
          .attr('text-anchor', function(d) {
            if (scaleX(dateParse(d.date)) > (width / 2)) {
              return 'end';
            } else {
              return 'start';
            }
          });

        textContainer.appendSelect('text.date')
          .text(d => dateFormatTT(dateParse(d.date)));

        textContainer.appendSelect('text.text')
          .attr('dy', 16)
          .text(d => d.text);

        annotationsContainer.exit()
          .remove();
      }
    } else {
      gOuter.select('.container').remove()
      this.selection()
        .appendSelect('p.no-data')
        .text(Mustache.render(props.text.no_data, { variable: props.variable_name }))
    }

    return this;
  }
}

export default WeeklyAverage;
