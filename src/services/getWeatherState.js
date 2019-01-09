
import {RAIN, SNOW, FOG, SUN, CLOUD, THUNDER, DRIZZLE} from "./../constants/weathers";
 
const getWeatherState = weather_data => {
    
    const weatherStateText = weather_data.condition.text;
    let text=SUN;

    if(weatherStateText.toLowerCase().includes("snow")) 
        text=SNOW;
    else
        if(weatherStateText.toLowerCase().includes("sun")) 
        text=SUN;
    else
        if(weatherStateText.toLowerCase().includes("drizzle")) 
        text=DRIZZLE;    
    else
        if(weatherStateText.toLowerCase().includes("rain")) 
        text=RAIN;  
    else
        if(weatherStateText.toLowerCase().includes("thunder")) 
        text=THUNDER;
    else
        if(weatherStateText.toLowerCase().includes("cloud")) 
        text=CLOUD;    
    else
        if(weatherStateText.toLowerCase().includes("fog")) 
        text=FOG;  
    else
        if(weatherStateText.toLowerCase().includes("overcast")) 
        text=CLOUD;  
    return text;
};

export default getWeatherState;