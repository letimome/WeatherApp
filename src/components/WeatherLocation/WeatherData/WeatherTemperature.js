import React from 'react';
import WeatherIcons from "react-weathericons";
import { CLOUD, SUN, WINDY, RAIN, FOG, CLOUDY, SNOW } from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
    [CLOUDY]: "cloudy",
    [CLOUD]: "cloudy",
    [RAIN]: "rain",
    [WINDY]: "wind",
    [SNOW]: "snow"
};

const wsize="4x";
const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons className= "wicon" name={icon} size={wsize}></WeatherIcons>;
    else
        return <WeatherIcons className= "wicon" name={"day-sunny"}  size={wsize}></WeatherIcons>;

};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className= "weatherTemperatureContainer"> 
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{temperature}</span> <span className="temperatureType"> {"Cº"}</span>
    </div>
);

WeatherTemperature.PropTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;