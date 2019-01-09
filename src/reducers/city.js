//reducer for maintaining the active city
import {SET_CITY} from './../actions';

//El reducer tiene que ser una función pura  
export const city = (state, action) => { // mejor mantener un switch con un unico case

    switch (action.type ) {
        case SET_CITY:
            return {//cuando se genere una accion tipo set city, devolver un nuevo estado: estado anterior + valor de la accion
                ...state, //desplosar el estado actual
                city: action.payload //cambia la city por el valor seleccionado. No usar el setState

            };
        default: 
            return state;    
    }
 }
