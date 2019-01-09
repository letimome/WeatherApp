import React, {Component} from "react";
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import CircularProgress from "@material-ui/core/CircularProgress";
import transformForecast from './../services/transformForecast';

/*
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thurday',
    'Friday'
];

const data = {
    temperature: 10,  
    weatherState: 'sun',
    humidity: '50',
    wind: '10'
}*/


const apo_key="d2e29ede53d746a7b1170527190901";
const url_base_forecast = "http://api.apixu.com/v1/forecast.json?key="


class ForecastExtended extends Component {

    constructor (props){
        super(props);
        this.state = { forecastData: null}
    }


    updateCity = city => {
        const url_forecast = `${url_base_forecast+apo_key}&q=${city}&days=5`;
        
        fetch(url_forecast).then(data => (data.json())
        ).then (weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData}) ;//update the state of forecast data
            }
        );
    }

    componentDidMount(){ //For fetching when the component is first loaded
        console.log("component did mount ");
        this.setState({forecastData: null}) //para que aparezca el indicador de carga
        this.updateCity(this.props.city);

    }

    //esto es UNSAFE!
    componentWillReceiveProps(nextProps){ //previo al establecimiento de las propiedades
        if (nextProps.city !== this.props.city){
            this.updateCity(nextProps.city);
        }
    }

    renderForecastItemDays(forecastData){
       // return <h1>Render Items</h1>;
        
        return (forecastData.map (forecast => 
        <ForecastItem 
            key = {`${forecast.weekDay}${forecast.hour}`}
            weekDay = {forecast.day} 
            hour = {forecast.hour} 
            data = {forecast.data}>
         </ForecastItem> ));
        
    }

    renderProgress = ()=> {
        return <CircularProgress size={50} />

    }

    render(){
        const city = this.props.city;
        const forecastData = this.state.forecastData;
        return (
         <div className='forecastExtended'> 
            <h2 className="forecast-title">Forecast extended for {city} </h2>
            {forecastData ?
                this.renderForecastItemDays(forecastData) :
                this.renderProgress()
            }
        </div>
        )
    }

}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
export default ForecastExtended;
