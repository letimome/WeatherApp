import React from 'react'
import PropTypes from "prop-types";
import './styles.css';

const WeatherExtraInfo = ({ humidity , wind}) => {
//{`${humidity} % -` }</span>  ==>template string
   return( 
        <div className = "weatherExtraInfoContainer">
            <span className="weatherExtraInfoText">{"Humedad:" +humidity + "%"}</span>  
            <span className="weatherExtraInfoText">{"Vientos: "+wind }</span>
        </div>
   ); 
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isrequired,
    wind: PropTypes.string.isrequired
};
export default WeatherExtraInfo;