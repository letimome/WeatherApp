import getWeatherState from './getWeatherState';

const transformWeatherDataForSummary = forecast_data =>{
  
    const {avghumidity , avgtemp_c , maxwind_mph} = forecast_data.day;
   // const {text} = weather_data.condition; //weatherState
   // const {name} = weather_data.location; //city
    const stateWeather = getWeatherState(forecast_data.day);
    const data ={
        humidity: avghumidity, 
        temperature : avgtemp_c,
        wind: maxwind_mph+ " m/h",
        weatherState: stateWeather
    }
    return data;
};

export default transformWeatherDataForSummary;