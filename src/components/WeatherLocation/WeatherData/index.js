import React from 'react'
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from "prop-types";
import './styles.css';

const WeatherData = ({data}) => {
    const {temperature, weatherState, humidity, wind} = data;
   return(  
   <div className="weatherDataContainer">
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState} //el uso de las constantes lanza error a la hora de compilar 
        />
        <WeatherExtraInfo 
            humidity={humidity} 
            wind={wind}
        />
    </div>);
   };

   WeatherData.PropTypes = {
       data: PropTypes.shape({
           temperature: PropTypes.number.isRequired,
           wind: PropTypes.string.isRequired,
           humidity: PropTypes.number.isRequired,
           weatherState: PropTypes.string.isRequired,
        }),
   }
export default WeatherData;