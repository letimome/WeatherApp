import getWeatherState from './getWeatherState';

const transformWeather = weather_data =>{
  
    const {humidity , temp_c , wind_mph} = weather_data.current;
   // const {text} = weather_data.condition; //weatherState
   // const {name} = weather_data.location; //city
    const stateWeather = getWeatherState(weather_data.current);
    const data ={
        humidity, 
        temperature : temp_c,
        wind: wind_mph+ " m/h",
        weatherState: stateWeather

    }
    return data;
};

export default transformWeather;