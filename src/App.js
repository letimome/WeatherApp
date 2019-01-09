import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ForecastExtended from './components/ForecastExtended'

const cities =[
  "Bilbao",
  "Torino",
  "Mondragon",
  "Toronto",
  "Madrid",
]
class App extends Component {

constructor(){
    super();
    this.state={//only for initial values for state, only for the constructor
        city: null,
    }
}


  handleSelectedLocation = city =>{
    console.log('handle selected location '+city);
    this.setState({city: city});
  }

  render() {
    return (  
        <Grid fluid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather Forecast
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationList 
            cities= {cities} 
            onSelectedLocation ={this.handleSelectedLocation} >
          </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
            <div className="details" >
            {
              !this.state.city ? <h1>Select a city for a extended forecast </h1> :
              <ForecastExtended city = {this.state.city}/>
            }
            
            </div>
           
            </Paper>
          </Col>
        </Row>

        
        </Grid>
        
       
      
    );
  }
}

export default App;
