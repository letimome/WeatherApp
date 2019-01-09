import React from "react";
import './styles.css';
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";

const LocationList = ({cities, onSelectedLocation}) => {
  
  const handleWeatherLocationClick = (city) =>{
    console.log("On componenet LocationList, clicked in city: "+ city);
    onSelectedLocation(city);
  }

  const strToComponents = (cities)=> {
    return cities.map( (city)=>  
            <WeatherLocation 
              city = {city} 
              key = {city}
              onWeatherLocationClick={ () => handleWeatherLocationClick(city)} 
            />)
  };

  return (
    <div className='locationList'>
      { strToComponents(cities) }
    </div>);
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationList;