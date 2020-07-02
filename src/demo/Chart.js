import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import d3 from '../lib/utils/d3';
import { base } from '@reuters-graphics/style-color/dist/categorical';
import debounce from 'lodash/debounce';
let newDataRead
d3.json('http://graphics.thomsonreuters.com/data/2020/coronavirus/global-tracker/countries/china/counts/cases.json')
      .then(function(newdata){
        newDataRead = newdata
      })

class ChartComponent extends React.Component {
  state = { width: '' };
  chartContainer = React.createRef();

  // Instantiate and add our chart class to this component.
  chart = new Chart();

  // A resize function to redraw the chart.
  resize = debounce(() => { this.chart.draw(); }, 250);


  componentDidMount() {
    // Use our chart module.
    this.chart
      .selection(this.chartContainer.current)
      // .data(newDataRead)
      .props({
        // population: 370000000,
        labels: true, annotations:[
            {
              'date':'2020-02-12',
              'text':'Hubei revises methodology',
              'class':'hide-mobile'
            },
            {
              'date':'2020-05-25',
              'text':'Hubei revises methodology',
              'class':'hide-desktop'
            }]})
      .draw();

    
      // setTimeout(() => {
      //   this.chart
      //   .selection(this.chartContainer.current)
      //     .data(newDataRead)
      //     .props({ height: 250,labels: true,population:1700000000,annotations:[
      //       {
      //         'date':'2020-02-12',
      //         'text':'Hubei revises methodology'
      //       }] })
      //     .draw();
      // }, 4000);
    // Use it again.
    
    // setTimeout(() => {
    //   this.chart
    //     // .data([30, 50, 30])
    //     .props({ fill: base.blue.hex })
    //     .draw();
    // }, 2000);

    // Add a listener to resize chart with the window.
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    // Remove listener if the component is removed, too.
    window.removeEventListener('resize', this.resize);
  }

  componentDidUpdate() {
    // Update the chart with the component.
    // Can change data or props here, whatever...
    this.chart.draw();
  }

  render() {
    const { width } = this.state;
    return (
      <ChartContainer width={width} setWidth={(width) => this.setState({ width })}>
        {/* This is our chart container 👇 */}
        <div id='chart' ref={this.chartContainer} />
      </ChartContainer>
    );
  }
}

export default ChartComponent;
