![](./badge.svg)

# WeeklyAverage

### Install

```
$ yarn add @reuters-graphics/chart-module-weeklyaverage
```

### Use

```javascript
import WeeklyAverage from '@reuters-graphics/chart-module-weeklyaverage';

const myChart = new WeeklyAverage();

// To create your chart, pass a selector string to the chart's selection method,
// as well as any props or data to their respective methods. Then call draw.
myChart
  .selection('#chart')
  .data([
  	// the data format needs a date and count variable. 
  	{"date":"2020-07-05","count":10000},
  	{"date":"2020-07-06","count":10000}
  ])
  .props(
	stroke: 'steelblue', // colour of line
	strokeWidth: 2.5, // width of the line
	fill: '#eee', // colour of the bars
	height: 200, // chart height
	avg_days: 7, // avg line should be an how many day rolling avg
	annotations: [ // array of annotations you want on the chart in the format below. Class hide-mobile and hide-desktop can be used for platform specific annotations
		//	{
        //       'date':'2020-02-12',
        //       'text':'Hubei revises methodology',
        //       'class':'hide-mobile'
        //   }
	], 
	population: false, // If you want the numbers to be normalised by population, pass a number here. It is false by default.
	bars: true, // True by default. If you want just the line, set value to true
	padding: 0, // to set padding between the bars. value should be between 0 to 1
	labels: false, // Setting this to true will show a label to explain what the bars and line are
	variable_name: 'cases', // What is this a chart of? Infections? Deaths? Tests?
	text: { // Here we pass all the text lines in the chart
	  daily_numbers: 'Daily new ', // Daily new cases next to the bar will show up
	  tooltip_suffix: ' new ', // Tooltip will say XXXXX new cases
	  avg: '{{ average }}-day average', // How many day avg is the line. takes the number automatically from avg_days
	  per_pop_tt_suffix: ' per 100k people in the population', // if normalised by population, tooltip will say XXXXX new cases per 100k people in the population
	},
  )
  .draw();

// You can call any method again to update the chart.
myChart
  .data([
  	{"date":"2020-07-05","count":10000},
  	{"date":"2020-07-06","count":20000},
  	{"date":"2020-07-04","count":10000}
  ])
  .draw();

// Or just call the draw function alone, which is useful for resizing the chart.
myChart.draw();
```

To apply this chart's default styles when using SCSS, simply define the variable `$WeeklyAverage-container` to represent the ID or class of the chart's container(s) and import the `_chart.scss` partial.

```CSS
$WeeklyAverage-container: '#chart';

@import '~@reuters-graphics/chart-module-weeklyaverage/scss/main';
```

## Developing chart modules

Read more in the [DEVELOPING docs](./DEVELOPING.md) about how to write your chart module.
