import React from 'react';


function WeatherOutput (props) {

    
   return (
       <div className="card">
           {props.apiData.cod === 200 ?
               <div className="card-body">
                   <h3 className="card-text">The temperature in <strong>{props.apiData.name}</strong> is {Math.round(props.apiData.main.temp)} ° Celsius. </h3>
                   <p  className="card-text">The weather is currently {props.apiData.weather[0].description} </p>
                   <img src= {`http://openweathermap.org/img/wn/${props.apiData.weather[0].icon}@2x.png`} alt="weathericon" className="card-img-bottom"/>
               </div>
           : null
           }
       </div>
   )
}
export default WeatherOutput;