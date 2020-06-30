import {dateParse , compareValues, dateFormatData}  from "./tools/utils"
import * as d3 from "d3";
import * as _ from 'underscore'

const parseData = function(passed) {
	let data = passed.unparsed
	let newData=[], currentCount=0
	let countries = Object.keys(data.countries)
  
	for (let i = 0; i<countries.length; i++){
		for (let j = 0; j<data.series.length; j++){
			let obj = {
				'location':countries[i],
				'date': dateParse(data.series[j]),
				'cases': data.countries[countries[i]].cases[j],
				'deaths': data.countries[countries[i]].deaths[j],
				'recovered': data.countries[countries[i]].recovered[j],
			}
			obj.active = obj.cases-obj.deaths-obj.recovered

			if (j!=0){
				obj.diff_cases = data.countries[countries[i]].cases[j]-data.countries[countries[i]].cases[j-1]
				obj.diff_deaths = data.countries[countries[i]].deaths[j]-data.countries[countries[i]].deaths[j-1]
				obj.diff_recovered = data.countries[countries[i]].recovered[j]-data.countries[countries[i]].recovered[j-1]
			}

			newData.push(obj)
		}
    if (data.countries[countries[i]].current==true){
      currentCount++
    }
	}
  passed.lastUpdated = passed.unparsed.lastUpdated
	passed.newdata = _.sortBy(newData, d=>d.date)
	passed.startDate = dateParse('2020-01-20T00:00:00.000Z')
	passed.nested = d3.nest().key(d=>dateFormatData(d.date)).entries(passed.newdata)
  passed.countryWise = d3.nest().key(d=>d.location).entries(passed.newdata)
  passed.currentCount = currentCount
  passed.midupdate = passed.currentCount>200?false:true
  passed.deaths=[]
  passed.meandeaths=[]

  for (let i = 0; i<passed.nested.length; i++){
      passed.nested[i].date = (passed.nested[i].key)
      passed.nested[i].cumulative_global = d3.sum(passed.nested[i].values, d=>+d.cases)
      passed.nested[i].cumulative_deaths = d3.sum(passed.nested[i].values, d=>+d.deaths)
      passed.nested[i].recovered = d3.sum(passed.nested[i].values, d=>+d.recovered)
      if (i>0){
        passed.nested[i].daily_recovered = passed.nested[i].recovered-passed.nested[i-1].recovered
        passed.nested[i].daily_deaths = passed.nested[i].cumulative_deaths-passed.nested[i-1].cumulative_deaths
      } else {
        passed.nested[i].daily_recovered = passed.nested[i].recovered
        passed.nested[i].daily_deaths = passed.nested[i].cumulative_deaths
      }
      passed.nested[i].daily_recovered=passed.nested[i].daily_recovered<0?0:passed.nested[i].daily_recovered
      passed.nested[i].daily_deaths=passed.nested[i].daily_deaths<0?0:passed.nested[i].daily_deaths
      passed.nested[i].values = passed.nested[i].values.filter(d=>d.cases>0)
      let o = {
        date: passed.nested[i].date,
        total: 0
      },
      meano = {
        date: passed.nested[i].date,
        total: 0
      }
      let df = passed.deaths.slice(-7)

      meano['total'] = d3.mean(df,e=>+e['total'])
      if(!meano['total']){
        console.log('PROBLEM')
      }
      if (i>0 && meano['total']){
        passed.meandeaths.push(meano)
      }
      passed.deaths.push(o)
      
      }


  	passed.countryWise.sort(compareValues('key'))
  	passed.countryWise.sort(compareValues('difference'))
  	passed.countryWise.sort(compareValues('max', 'desc'))
    

  console.log(passed)
	return passed
}

export default parseData;