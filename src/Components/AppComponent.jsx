import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import Weather from './Weather';

function AppComponent() {

    let [city, setCity] = useState("Udaipur");

    let [weather, setWeather] = useState(null);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const API_KEY = "39c8f304dd340aab977f07ad7b80e3f0";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const fetchWeather = async (cityName) =>{

        setLoading(true);
        setError(null);

        try{

            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

            let data = await response.json();

            setWeather(data);


        } 
        catch (err) {
            setError("City not found. Please try again.");
          } 
          
        finally {
            setLoading(false);
          }  
    }
    
    useEffect(() => {
        fetchWeather(city)
    }, [city])

  return (
    <div className= "bg-blue-100 min-h-screen flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Weather App</h1>



        <Searchbar setCity ={setCity}/>
        {loading && <p className="text-blue-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {weather && <Weather weather = {weather}/>}

    </div>

    
  )
}

export default AppComponent