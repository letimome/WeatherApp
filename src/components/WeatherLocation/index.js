import React, {Component} from "react";
import Location from "./Location"
import PropTypes from "prop-types";
import WeatherData from "./WeatherData"
import { SUN } from "../../constants/weathers";

const location = "Buenos Aires,ar";
const apo_key="b1b15e88fa797225412429c1c50c122a1";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"
const api_weather = url_base_weather +"?q="+location+"&appid="+apo_key;
const data = {
    temperature: 11,
    humidity: 70,
    weatherState: SUN,
    wind: "80 m/s"

};


const data2 = {
    temperature: 1,
    humidity: 2,
    weatherState: SUN,
    wind: "300 m/s"

};
const city="Donosti";

class WeatherLocation extends Component{//al extender de component hay más opciones...
    
    constructor(){
        super();
        this.state={//onli for initial values for state
            city: city,
            data: data,
        }
    }

    handleUpdateButtonClick=()=>{
        fetch(api_weather);//go and get data

        console.log("update");
        this.setState({city:"San Sebastian",data:data2});
    }
    
    render(){
        return (
            <div className="weatherLocationContainer">
                <Location  city= {this.state.city} />
                <WeatherData data={this.state.data} />
                <button onClick={this.handleUpdateButtonClick}>Update</button>
            </div>

        );
    }
}


WeatherLocation.PropTypes={
    city: PropTypes.string.isRequired
};
export default WeatherLocation; // está disponible al "mundo"