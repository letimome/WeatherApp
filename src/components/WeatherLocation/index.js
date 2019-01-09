import React, {Component} from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import getUrlWeatherByCity from "../../services/getUrlWeatherByCity"
import WeatherData from "./WeatherData"
import transformWeather from "../../services/transformWeather"
import Location from "./Location"

class WeatherLocation extends Component{//al extender de component hay más opciones...
    
    constructor(props){
        super(props);
        const {city } = props;

        this.state={//only for initial values for state
            city: city,
            data: null,
        }
    }

    componentDidMount(){
        console.log("component did mount")
        this.handleUpdateButtonClick();
    }

    componentDidUpdate(prevProps, prevState){
        

    }
    componentWillMount(){//UNSAFE
    }
   
    componentWillUpdate(prevProps, prevState){//UNSAFE
    }


    handleUpdateButtonClick=()=>{
        const weather_api = getUrlWeatherByCity(this.state.city);
        fetch(weather_api ).then(resolve => {
            return resolve.json()            
        }).then(data=>{
            const newWeatherData= transformWeather(data);
            console.log(newWeatherData);
            debugger;
            this.setState({
                data:newWeatherData});
            });//go and get data
    }
    
    render = () => {
        const {onWeatherLocationClick} = this.props;
        const {city , data} = this.state;
        return (
            <div className="weatherLocationContainer" onClick={onWeatherLocationClick} >
                <Location  city= {city} />
                
                {data ? <WeatherData data={data} />  //operador ternario
                : <CircularProgress size={50} />
                }
            </div>
        );
    }
}


WeatherLocation.propTypes={
    city: PropTypes.string.isRequired
};

WeatherLocation.propTypes = {
    city:PropTypes.string.isRequired,
}

WeatherLocation.propTypes = {
    onWeatherLocationClick:PropTypes.func,
}

export default WeatherLocation; // está disponible al "mundo"