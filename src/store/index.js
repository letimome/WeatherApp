import {createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';
import {city} from './../reducers/city';

const initialState = {
  city: 'Bilbao',
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose; //para usar la herramienta de debugging

export const store = createStore( 
  city, //funcion del reducer--cambia el estado de la aplicacion
  initialState,
  composeEnhancers(applyMiddleware(thunk))); 

