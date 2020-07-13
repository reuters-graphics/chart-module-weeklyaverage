import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import React from 'react';
import debounce from 'lodash/debounce';
import defaultData from './defaultData.json';

class ChartComponent extends React.Component {
  state = { width: '200' };
  chartContainer = React.createRef();

  // Instantiate and add our chart class to this component.
  chart = new Chart();

  // A resize function to redraw the chart.
  resize = debounce(() => { this.chart.draw(); }, 250);

  componentDidMount() {
    this.chart
      .selection(this.chartContainer.current)
      .data(defaultData)
      .props({
        // population: 370000000,
        // labels: true,
        // x_axis: false,
        // bars: false,
        left_y_axis: true,
        // date_range: ['2020-03-01','2020-06-02'], // YYYY-MM-DD format
        // margin:{
        //   left: 0,bottom: 0,top:0
        // }
        // annotations:[
        //     {
        //       'date':'2020-02-12',
        //       'text':'Hubei revises methodology',
        //       'class':'hide-mobile'
        //     },
        //     {
        //       'date':'2020-05-25',
        //       'text':'Hubei revises methodology',
        //       'class':'hide-desktop'
        //     }]
      })
      .draw();

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
