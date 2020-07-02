import React, { useEffect, useState } from 'react';

import Chart from '../lib/chart.js';
import ChartContainer from './furniture/ChartContainer';
import d3 from '../lib/utils/d3';
import debounce from 'lodash/debounce';

let newDataRead;
d3.json('http://graphics.thomsonreuters.com/data/2020/coronavirus/global-tracker/countries/china/counts/cases.json')
  .then(function(newdata) {
    newDataRead = newdata;
  });

// Instantiate our chart class.
const chart = new Chart();

const ChartComponent = () => {
  const chartContainer = React.createRef();

  // A resize function to redraw the chart.
  const handleResize = debounce(() => { chart.draw(); }, 250);

  // A "state" variable and the function to update it.
  const [width, setWidth] = useState('');
  const [option, setOption] = useState('');

  // A resizer func.
  useEffect(() => {
    // This is run when the component first mounts
    window.addEventListener('resize', handleResize);
    // This is run when the component unmounts
    return () => { window.removeEventListener('resize', handleResize); };
  }, []); // This array says on run this when the component first mounts and when it unmounts

  // Run every time our state variables update
  useEffect(() => {
    chart.selection(chartContainer.current);

    switch (option) {
      case 'annotations':
        chart
          .props({
            labels: true,
            annotations: [{
              date: '2020-02-12',
              text: 'Hubei revises methodology',
              class: 'hide-mobile',
            }, {
              date: '2020-05-25',
              text: 'Hubei revises methodology',
              class: 'hide-desktop',
            }],
          })
          .draw();
        break;
      case 'new-data':
        chart
          .data(newDataRead)
          .props({
            height: 250,
            labels: true,
            population: 1700000000,
            annotations: [{
              date: '2020-02-12',
              text: 'Hubei revises methodology',
            }],
          })
          .draw();
        break;
      default:
        chart
          .props({
            labels: true,
            annotations: [],
          })
          .draw();
    }
  }, [option, chartContainer]);

  return (
    <ChartContainer width={width} setWidth={(width) => setWidth(width)}>
      {/* This is our chart container 👇 */}
      <div id='chart' ref={chartContainer} />
      {/* Some options we can use to show what our chart does! */}
      <div className='options-container'>
        <h6>Props</h6>
        <button
          onClick={() => setOption('')}
        >Default
        </button>
        <button
          onClick={() => setOption('annotations')}
        >Annotations
        </button>
        <button
          onClick={() => setOption('new-data')}
        >New data
        </button>
      </div>
    </ChartContainer>
  );
};

export default ChartComponent;
