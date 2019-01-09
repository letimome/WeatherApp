import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';

const cities =[
  "Bilbao",
  "Torino",
  "Mondragon",
  "Toronto",
  "Madrid",
];



class App extends Component { // container

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
          <LocationListContainer cities={cities}> </LocationListContainer> 
            
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
            <div className="details" >          
              <ForecastExtendedContainer />
            </div>          
            </Paper>
          </Col>
        </Row>
        </Grid>
    );
  }
}

export default App;