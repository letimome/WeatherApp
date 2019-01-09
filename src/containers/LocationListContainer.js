import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setCity} from './../actions'
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = city =>{      
        this.props.setCity(city);
        //store.dispatch(setCity(city));//invocar al store, que ejecutará el dispatch para la accion
      }


    render (){
        return (
            <LocationList 
            cities= {this.props.cities} 
            onSelectedLocation ={this.handleSelectedLocation} >
          </LocationList>

        );

    }
}

LocationListContainer.PropTypes ={
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
  }
  
  //con esto inyectamos propiedades al componente: en concreto para el 
  const mapDispatchToProps = (dispatch) =>({ // le pasamos una funcion como parametro y lo ejecutamos
    setCity: value => {dispatch (setCity(value))}//una propiedad del tipo funcion
  });
  
  
  //CONNECT es una funcion que espera dos funciones. Retorna otra funcion con valor de nuestro componente. 
  //Ahora el App se puede connectar con el store
  // high order component: funciones que toman como parametro components y lo devuelven 'mejorado'

export default connect( null , mapDispatchToProps) (LocationListContainer);


