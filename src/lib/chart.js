import { getDates, round } from './utils/utils';

import ChartComponent from './base/ChartComponent';
import Mustache from 'mustache';
import d3 from './utils/d3';

// import defaultData from './defaultData.json';

const dateParse = d3.timeParse('%Y-%m-%d');
const dateFormat = d3.timeFormat('%b %e');
const dateFormat_tt = d3.timeFormat('%B %e');
const numberFormat_tt = d3.format(',');

class WeeklyAverage extends ChartComponent {
  defaultProps = {
    stroke: 'steelblue',
    strokeWidth: 2.5,
    fill: '#eee',
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
      left: 20, right: 50, top: 10, bottom: 30
    },
    text: {
      daily_numbers: 'Daily new ',
      tooltip_suffix: ' new ',
      avg: '{{ average }}-day average',
      per_pop_tt_suffix: ' per 100k people in the population',
      subhed: '',
      no_data: 'No reported '
    },
  };

  defaultData = [];

  draw() {
    let data = this.data();
    const props = this.props();
    const node = this.selection().node();
    let dateList = [];

    const { width } = node.getBoundingClientRect();
    const transition = d3.transition()
      .duration(750);

    if (props.text.subhed.length > 0) {
      this.selection()
        .appendSelect('p.subhed')
        .text(props.text.subhed);
    }
    const g = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height)
      .appendSelect('g')
      .attr('transform', `translate(${props.margin.left}, ${props.margin.top})`);

    if (d3.sum(data, d => d.count) > 0) {
      data.forEach(function(d, i) {
        d.use_count = (props.population) ? (d.count / props.population * 100000) : d.count;
        d.mean = d3.mean(data.slice((i - props.avg_days), i), d => +d.count); // avg calc
        d.use_mean = (props.population) ? (d.mean / props.population * 100000) : d.mean;
      });

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

      // x scale
      const scaleX = d3.scaleBand()
        .round(false)
        .range([0, width - props.margin.right - props.margin.left])
        .domain(dateList)
        .padding(props.padding);

      const yRange = d3.extent(data, d => +d.use_count)
      // y scale
      const scaleY = d3.scaleLinear()
        .range([props.height - props.margin.bottom - props.margin.top, 0])
        .domain(yRange);

      // line
      const line = d3.line()
        .x(d => scaleX(dateParse(d.date)))
        .y(d => scaleY(d.use_mean ? d.use_mean : 0));

      if (props.left_y_axis) {
        const label_container = g.appendSelect('g.labels');
        const max = d3.max(data, d => d.use_mean);
        const max_var = data.filter(d => d.use_mean === max)[0];
        const new_nos_label = label_container.appendSelect('g.new-nos-label')
          .attr('transform', `translate(${scaleX(dateParse(max_var.date))},${scaleY(max_var.use_mean)})`);

        new_nos_label.appendSelect('line')
          .attr('x1', -10)
          .attr('x2', 0)
          .attr('y1', 10)
          .attr('y2', 10);

        new_nos_label.appendSelect('text')
          .style('text-anchor', 'end')
          .attr('dx', -13)
          .attr('dy', 12)
          .text(max_var.use_mean);
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
          .call(d3.axisRight(scaleY).ticks(ticks));

        g.select('.axis--y').selectAll('.tick').each(function(d) {
          if (d === 0) {
            this.remove();
          }
        });
      }

      if (props.x_axis) {
        g.appendSelect('g.axis--x')
          .attr('class', 'axis--x axis')
          .transition(transition)
          .attr('transform', `translate(0,${props.height - props.margin.bottom - props.margin.top})`)
          .call(d3.axisBottom(scaleX).tickValues([dateList[0], dateList[dateList.length - 1]]).tickFormat(dateFormat));
      }

      if (props.bars) {
        const bars = g.appendSelect('g.bars-container')
          .selectAll('.bar')
          .data(data, (d, i) => d.date); // for smooth data updation

        bars.enter().append('rect')
          .attr('class', d => `bar d-${d.date.replace(/-/g, '')}`)
          .style('fill', props.fill)
          .attr('height', d => scaleY(yRange[0]) - scaleY(+d.use_count))
          .attr('x', (d, i) => scaleX(dateParse(d.date)))
          .attr('y', d => scaleY(+d.use_count))
          .attr('width', scaleX.bandwidth())
          .merge(bars)
          .transition(transition)
          .attr('height', d => scaleY(yRange[0]) - scaleY(+d.use_count))
          .attr('x', (d, i) => scaleX(dateParse(d.date)))
          .attr('y', d => scaleY(+d.use_count))
          .attr('width', scaleX.bandwidth());

        bars.exit()
          .transition(transition)
          .attr('height', 0)
          .remove();

        const bars_dummy = g.appendSelect('g.dummy-container')
          .selectAll('.dummy')
          .data(data, (d, i) => d.date);

        bars_dummy.enter()
          .append('rect')
          .style('fill', 'white')
          .attr('class', 'dummy')
          .style('opacity', 0)
          .attr('height', d => props.height)
          .attr('x', (d, i) => scaleX(dateParse(d.date)))
          .attr('y', d => 0)
          .attr('width', scaleX.bandwidth())
          .on('mouseover', showTooltip)
          .on('mouseout', hideTooltip)
          .merge(bars_dummy)
          .transition(transition)
          .attr('height', d => props.height)
          .attr('x', (d, i) => scaleX(dateParse(d.date)))
          .attr('y', d => 0)
          .attr('width', scaleX.bandwidth());

        bars_dummy.exit()
          .transition(transition)
          .attr('height', 0)
          .remove();

        bars_dummy.on('mouseover', showTooltip)
          .on('mouseout', hideTooltip);
      }

      // avg line
      const avg_line = g.selectAll('.avg-line')
        .data([data]);

      avg_line.enter()
        .append('path')
        .attr('class', 'avg-line')
        .merge(avg_line)
        .transition(transition)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', props.stroke)
        .attr('stroke-width', props.strokeWidth);

      // LABELS
      if (props.labels) {
        const label_container = g.appendSelect('g.labels');

        // avg label
        const avg_label = label_container.appendSelect('g.avg-label')
          .attr('transform', `translate(${scaleX(dateParse(data[14].date))},${scaleY(data[14].use_mean) - props.height / 20})`);

        avg_label.appendSelect('line')
          .attr('x1', 0)
          .attr('x2', 0)
          .attr('y1', props.height / 20)
          .attr('y2', 0);

        avg_label.appendSelect('text')
          .attr('dx', -10)
          .attr('dy', -5)
          .text(Mustache.render(props.text.avg, { average: props.avg_days }));

        // new numbers label

        // GET MAX

        const max = d3.max(data, d => d.use_count);
        const max_var = data.filter(d => d.use_count == max)[0];
        const new_nos_label = label_container.appendSelect('g.new-nos-label')
          .attr('transform', `translate(${scaleX(dateParse(max_var.date))},${scaleY(max_var.use_count)})`);

        new_nos_label.appendSelect('line')
          .attr('x1', -10)
          .attr('x2', 0)
          .attr('y1', 10)
          .attr('y2', 10);

        new_nos_label.appendSelect('text')
          .style('text-anchor', 'end')
          .attr('dx', -13)
          .attr('dy', 12)
          .text(`${props.text.daily_numbers + props.variable_name}`);
      }
      // tooltip
      const tooltipBox = this.selection()
        .appendSelect('div.custom-tooltip');

      const tt_inner = tooltipBox.appendSelect('div.tooltip-inner');

      function showTooltip(obj) {
        const tooltip_text_add = props.population ? props.text.per_pop_tt_suffix : '';
        const formatFunction = props.population ? round : numberFormat_tt;
        g.select(`.bar.d-${obj.date.replace(/-/g, '')}`)
          .classed('active', true);

        const coords = [];

        coords[0] = scaleX(dateParse(obj.date)) + props.margin.left + (scaleX.bandwidth() / 2);
        coords[1] = scaleY(obj.use_count) + props.margin.top;

        const q = getTooltipType(coords, [props.height, width]);

        tooltipBox.classed('tooltip-active', true)
          .classed('tooltip-ne tooltip-s tooltip-n tooltip-sw tooltip-nw tooltip-se', false)
          .style('left', `${coords[0]}px`)
          .style('top', `${coords[1]}px`)
          .classed(`tooltip-${q}`, true);

        tt_inner.appendSelect('div.tt-header')
          .text(dateFormat_tt(dateParse(obj.date)));

        tt_inner.appendSelect('div.tt-row')
          .text(formatFunction(obj.use_count) + props.text.tooltip_suffix + props.variable_name + tooltip_text_add);
      }

      function hideTooltip() {
        g.select('.bar.active')
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
      const annotation_check = !!g.selectAll('g.annotations-container').node();

      props.annotations = props.annotations.filter(function(d) {
        if (scaleX(dateParse(d.date)) && d.text.length > 1) {
          return d;
        }
      });

      if (props.annotations.length > 0 || annotation_check) {
        const annotations_container = g.appendSelect('g.annotations-container')
          .selectAll('.annotation')
          .data(props.annotations, (d, i) => d.date);

        const annotation = annotations_container.enter()
          .append('g')
          .attr('class', d => d.class ? `annotation ${d.class}` : 'annotation')
          .attr('transform', d => `translate(${scaleX(dateParse(d.date))},0)`);

        annotations_container.merge(annotations_container)
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

        const text_container = annotation.appendSelect('g.text-container')
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

        text_container.appendSelect('text.date')
          .text(d => dateFormat_tt(dateParse(d.date)));

        text_container.appendSelect('text.text')
          .attr('dy', 16)
          .text(d => d.text);

        annotations_container.exit()
          .remove();
      }
    } else {
      this.selection()
        .appendSelect('p.no-data')
        .text(props.text.no_data + '' + props.variable_name)
    }

    return this;
  }
}

export default WeeklyAverage;
