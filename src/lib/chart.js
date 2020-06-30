import ChartComponent from './base/ChartComponent';
import d3 from './utils/d3';
import { getDates }  from "./utils/utils"
import defaultData from './defaultData.json';

let dateParse = d3.timeParse("%Y-%m-%d");
let dateFormat = d3.timeFormat("%b %e");

class WeeklyAverage extends ChartComponent {
  defaultProps = {
    stroke: 'steelblue',
    strokeWidth: 2,
    fill: '#eee',
    height: 400,
    avg_days: 7,
    annotations: [],
    population: false,
    text:[
    {
      daily_cases: 'Daily cases',
      avg:'-day average'
    }]
  };

  defaultData = defaultData;

  draw() {

    const data = this.data();
    const props = this.props();
    const node = this.selection().node();
    const margin = {left: 20, right: 60, top: 10, bottom: 30}
    
    data.forEach(function(d,i){
      // if (d.date.match('-')){
      //   d.date = dateParse(d.date) // parse date  
      // }
      d.mean = d3.mean(data.slice((i-props.avg_days),i),d=>+d.count) // avg calc
    })
    // data = data.sort((a, b) => b.date - a.date)
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
                    .padding(.1)

    // y scale
    let scaleY = d3.scaleLinear()
                    .range([props.height-margin.bottom-margin.top,0])
                    .domain(d3.extent(data,d=>+d.count))

    // line
    let line = d3.line()
                  .x(d=>scaleX(dateParse(d.date)))
                  .y(d=>scaleY(d.mean?d.mean:0))

    const bars = g.selectAll('rect')
      .data(data, (d, i) => i);

    bars
      .style('fill', props.fill)

    bars.enter().append('rect')
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
          .style('stroke-width',props.strokeWidth)

    g.appendSelect('g.axis--y')
      .attr('class','axis--y axis')
      .transition(transition)
      .attr('transform',`translate(${width-margin.right-margin.left},0)`)
      .call(d3.axisRight(scaleY).ticks(4))

    g.appendSelect('g.axis--x')
    .attr('class','axis--x axis')
    .transition(transition)
    .attr('transform',`translate(0,${props.height-margin.bottom-margin.top})`)
    .call(d3.axisBottom(scaleX).tickValues([dateList[0],dateList[dateList.length-1]]).tickFormat(dateFormat))

    return this;
  }
}

export default WeeklyAverage;
