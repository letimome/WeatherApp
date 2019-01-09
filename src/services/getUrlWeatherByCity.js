
import {apo_key , url_base_weather} from "./../constants/api_url"


const getUrlWeatherByCity = city => {

    return url_base_weather +apo_key +"&q="+city; 
}

export default getUrlWeatherByCity;