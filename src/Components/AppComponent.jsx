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
    <div className='font-roboto bg-center bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1656859963341-20476ac7930e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] min-h-screen '>
      
    <div className= "flex flex-row justify-between boredr border-yellow-300">
        



        
        {loading && <p className="text-blue-600">Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {weather && <Weather weather = {weather}/>}
        <Searchbar setCity ={setCity}/>

    </div>

    </div>
    
    
    

    
  )
}

export default AppComponent