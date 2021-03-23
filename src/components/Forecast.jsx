import React, { useState } from 'react';
import WeatherOutput from "./WeatherOutput";

 const Forecast = () => {
    let [city, setCity] = useState('');
  	const [apiData, setApiData] = useState({});
  	const apiKey = process.env.REACT_APP_API_KEY;
	const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

   function getForecast(event) {
    event.preventDefault();
   	fetch(apiUrl)
   		.then((res) => res.json())
   		 .then((data) => setApiData(data));
      // weather data fetch function will go here
   }
   return (
   	     <div className="forecast">
           <h1>How's the weather in?</h1>
                    
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    /> <br/>

                <button type="submit">Get Forecast</button>

            </form>

            <WeatherOutput
              apiData={apiData}
            />

       </div>
       
   )
}

export default Forecast;