import moment from 'moment';
import transformWeatherDataForSummary from './transformWeatherDataForSummary';

const transformForecast = (data) => {
    //Filter data if necessary to return less elements in the array.
    return data.forecast.forecastday.map( item => ({
        weekDay: moment(item.date).format('ddd'),
        hour: 10,
        data: transformWeatherDataForSummary(item)
    }
        

       // console.log(moment(item.date).day())
    ));
}
   

export default transformForecast;