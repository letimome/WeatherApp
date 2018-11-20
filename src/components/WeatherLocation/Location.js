import React from 'react'
import "./styles.css";

const Location = (props) => {
  const {city} = props; //Destructuring
 // const city = props.city;
  return (
    <div className="locationContainer">
        <h1> 
            {city} 
       </h1> 
    </div>
  );
};
export default Location;