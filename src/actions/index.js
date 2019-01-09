import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const setCity = (payload) =>({  
    type: SET_CITY,
    payload: payload});

const apo_key="d2e29ede53d746a7b1170527190901";
const url_base_forecast = "http://api.apixu.com/v1/forecast.json?key="
    
    
export const fetchForecastData = payload => {

    return dispatch =>{//devolver una funcion
        const url_forecast = `${url_base_forecast+apo_key}&q=${payload}&days=5`;
        
        //1: activar en el estado un indicador de busqueda de datos

        fetch(url_forecast).then(data => (data.json())
        ).then (weather_data => {
                const forecastData = transformForecast(weather_data);
                //2: cuando tenemos una respuesta, tenemos los datos, modificar el estado con el resultado de la promise
            }
        );
    }

};