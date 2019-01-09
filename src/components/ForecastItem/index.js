import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';



const ForecastItem = ({weekDay, hour, data}) => {
    return (
        <div>
            <div>{weekDay} Time: {hour}</div>
            <WeatherData data={data}> </WeatherData>
    </div>
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.required,
    time: PropTypes.number.required,
    data: PropTypes.shape({
            temperature: PropTypes.number.isRequired,
            wind: PropTypes.string.isRequired,
            humidity: PropTypes.number.isRequired,
            weatherState: PropTypes.string.isRequired,
    }),
    
}

export default ForecastItem;
