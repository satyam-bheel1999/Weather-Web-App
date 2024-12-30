import React from 'react'

function Weather({weather}) {

    const {name, main, weather:details} = weather;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-lg font-medium mb-4">
        {details[0].description.toUpperCase()}
      </p>
      <div className="flex justify-center items-center space-x-4">
        <img
          src={`https://openweathermap.org/img/wn/${details[0].icon}@2x.png`}
          alt="weather icon"
        />
        <p className="text-4xl font-bold">{Math.round(main.temp)}°C</p>
      </div>
    </div>
  )
}

export default Weather