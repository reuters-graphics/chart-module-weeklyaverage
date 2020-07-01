import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import { getDates }  from "./utils/utils"
import defaultData from './defaultData.json';

let dateParse = d3.timeParse("%Y-%m-%d");
let dateFormat = d3.timeFormat("%b %e");
let dateFormat_tt = d3.timeFormat("%B %e");
let numberFormat_tt = d3.format(",")
var linewrap=18, font_siz=.8, lineheight=15

class WeeklyAverage extends ChartComponent {
  defaultProps = {
    stroke: 'steelblue',
    strokeWidth: 2.5,
    fill: '#eee',
    height: 400,
    avg_days: 7,
    annotations: [],
    population: false,
    padding: 0,
    labels: false,
    variable_name: 'cases',
    text:{
      daily_numbers: 'Daily new ',
      tooltip_suffix: ' new ',
      avg:'-day average'
    }
  };

  defaultData = defaultData;

  draw() {

    const data = this.data();
    const props = this.props();
    const node = this.selection().node();
    const margin = {left: 20, right: 50, top: 10, bottom: 30}
    
    data.forEach(function(d,i){
      d.mean = d3.mean(data.slice((i-props.avg_days),i),d=>+d.count) // avg calc
    })

    const { width } = node.getBoundingClientRect();
    const transition = d3.transition()
      .duration(750);

    const g = this.selection()
      .appendSelect('svg') // see docs in ./utils/d3.js
      .attr('width', width)
      .attr('height', props.height)
      .appendSelect('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
    
    let dateList = getDates(dateParse(data[0].date),dateParse(data[data.length-1].date)) // needs reworking
    
    // x scale
    let scaleX = d3.scaleBand()
                    .round(false)
                    .range([0, width-margin.right-margin.left])
                    .domain(dateList)
                    .padding(props.padding)

    // y scale
    let scaleY = d3.scaleLinear()
                    .range([props.height-margin.bottom-margin.top,0])
                    .domain(d3.extent(data,d=>+d.count))

    // line
    let line = d3.line()
                  .x(d=>scaleX(dateParse(d.date)))
                  .y(d=>scaleY(d.mean?d.mean:0))

    g.appendSelect('g.axis--y')
      .attr('class','axis--y axis')
      .transition(transition)
      .attr('transform',`translate(${width-margin.right-margin.left},0)`)
      .call(d3.axisRight(scaleY).ticks(3).tickSize(-width+margin.left+margin.right))

    g.appendSelect('g.axis--x')
      .attr('class','axis--x axis')
      .transition(transition)
      .attr('transform',`translate(0,${props.height-margin.bottom-margin.top})`)
      .call(d3.axisBottom(scaleX).tickValues([dateList[0],dateList[dateList.length-1]]).tickFormat(dateFormat))



    const bars = g.appendSelect('g.bars-container')
      .selectAll('.bar')
      .data(data, (d, i) => d.date); // for smooth data updation

    bars.enter().append('rect')
      .attr('class',d=>`bar d-${d.date.replace(/-/g,'')}`)
      .style('fill', props.fill)
      .attr('height', d=>(props.height-margin.top-margin.bottom)-scaleY(+d.count))
      .attr('x', (d,i)=>scaleX(dateParse(d.date)))
      .attr('y', d=>scaleY(+d.count))
      .attr('width', scaleX.bandwidth())
      .merge(bars)
      .transition(transition)
      .attr('height', d=>(props.height-margin.top-margin.bottom)-scaleY(+d.count))
      .attr('x', (d,i)=>scaleX(dateParse(d.date)))
      .attr('y', d=>scaleY(+d.count))
      .attr('width', scaleX.bandwidth())

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
      .attr('class','dummy')
      .style('opacity',0)
      .attr('height', d=>props.height)
      .attr('x', (d,i)=>scaleX(dateParse(d.date)))
      .attr('y', d=>0)
      .attr('width', scaleX.bandwidth())
      .on('mouseover',showTooltip)
      .on('mouseout',hideTooltip)
      .merge(bars_dummy)
      .transition(transition)
      .attr('height', d=>props.height)
      .attr('x', (d,i)=>scaleX(dateParse(d.date)))
      .attr('y', d=>0)
      .attr('width', scaleX.bandwidth())

    bars_dummy.exit()
      .transition(transition)
      .attr('height', 0)
      .remove();

    bars_dummy.on('mouseover',showTooltip)
      .on('mouseout',hideTooltip)

    

    // avg line
    const avg_line = g.selectAll('.avg-line')
                      .data([data])

    avg_line.enter()
          .append('path')
          .attr('class','avg-line')
          .merge(avg_line)
          .transition(transition)
          .attr('d',line)
          .attr('fill',"none")
          .attr('stroke',props.stroke)
          .attr('stroke-width',props.strokeWidth)


    // LABELS
    if (props.labels){
      let label_container = g.appendSelect('g.labels')

      // avg label
      let avg_label = label_container.appendSelect('g.avg-label')
                                      .attr('transform',`translate(${scaleX(dateParse(data[10].date))},${scaleY(data[10].mean)-props.height/20})`)

      avg_label.appendSelect('line')
                .attr('x1', 0)
                .attr('x2', 0)
                .attr('y1', props.height/20)
                .attr('y2', 0)

      avg_label.appendSelect('text')
                .attr('dx',-10)
                .attr('dy',-5)
                .text(`${props.avg_days}${props.text.avg}`)

      // new numbers label

      // GET MAX

      let max = d3.max(data, d=>d.count)
      let max_var = data.filter(d=>d.count==max)[0]
      let new_nos_label = label_container.appendSelect('g.new-nos-label')
                                      .attr('transform',`translate(${scaleX(dateParse(max_var.date))},${scaleY(max_var.count)})`)

      new_nos_label.appendSelect('line')
                .attr('x1', -10)
                .attr('x2', 0)
                .attr('y1', 10)
                .attr('y2', 10)

      new_nos_label.appendSelect('text')
                .style('text-anchor','end')
                .attr('dx',-13)
                .attr('dy',12)
                .text(`${props.text.daily_numbers+props.variable_name}`)
    }
    // tooltip
    let tooltipBox = this.selection()
                          .appendSelect('div.custom-tooltip')

    let tt_inner = tooltipBox.appendSelect('div.tooltip-inner')

    function showTooltip(obj) {
        d3.select(`.bar.d-${obj.date.replace(/-/g,"")}`)
          .classed('active',true)
        
        let coords = []

        coords[0]=scaleX(dateParse(obj.date))+margin.left+(scaleX.bandwidth()/2)
        coords[1]=scaleY(obj.count)+margin.top

        let q = getTooltipType(coords,[props.height,width])

        tooltipBox.classed('tooltip-active',true)
                  .classed(`tooltip-ne tooltip-s tooltip-n tooltip-sw tooltip-nw tooltip-se`,false)
                  .style('left',`${coords[0]}px`)
                  .style('top',`${coords[1]}px`)
                  .classed(`tooltip-${q}`,true)

        tt_inner.appendSelect('div.tt-header')
                .text(dateFormat_tt(dateParse(obj.date)))

         tt_inner.appendSelect('div.tt-row')
                .text(numberFormat_tt(obj.count)+props.text.tooltip_suffix+props.variable_name)
      }

    function hideTooltip() {
      d3.select('.bar.active')
        .classed('active',false)

      tooltipBox.classed('tooltip-active',false)
     
    }

    function getTooltipType(coords, size){
      let l = [];

      let ns_threshold = size[1]<500 ? 4 : 2;

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
    if(props.annotations.length>0){
      let annotations_container = g.appendSelect('g.annotations-container')
                        .selectAll('.annotation')
                        .data(props.annotations, (d, i) => d.date);
      
      let annotation = annotations_container.enter()
                                            .append('g')
                                            .attr('class','annotation')
                                            .attr('transform',d=>`translate(${scaleX(dateParse(d.date))},0)`)

      annotation.appendSelect('line')
                .attr('x1',0)
                .attr('x2',0)
                .attr('y2',0)
                .attr('y1',props.height-margin.top-margin.bottom)

      let text_container = annotation.appendSelect('g.text-container')
                                    .attr('transform',function(d){
                                        if (scaleX(dateParse(d.date))>(width/2)){
                                          return `translate(-10,${props.height/6*1.5})`
                                        } else{
                                          return `translate(10,${props.height/6*4})`
                                        }
                                    })
                                    .attr('text-anchor',function(d){
                                        if (scaleX(dateParse(d.date))>(width/2)){
                                          return 'end'
                                        } else{
                                          return 'start'
                                        }
                                    })
        text_container.appendSelect('text.date')
                     .text(d=>dateFormat_tt(dateParse(d.date)))

        text_container.appendSelect('text.text')
                      .attr('dy',16)
                      .text(d=>d.text)
                     // .text('')
                     // .tspans( function(d){return d3.wordwrap(d.text, linewrap)}, lineheight)
               
    }

    return this;
  }
}

export default WeeklyAverage;
