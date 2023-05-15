import React, { useState } from 'react'
import './WhetherApiGen.css'
const api = {
    key: 'a31e3cec5f3ec329ef4cc2b2f5251ed7',
    base: 'https://api.openweathermap.org/data/2.5/'
} 

function Weather(){
    const [search, setSearch] = useState("")
    const [weather, setWeather] = useState("")

    const searchPress = () =>{
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res => res.json()))
        .then((data) => setWeather(data))
    }

  return (
    <div className='Weather'>
    <header className='App-header'>
    <h1>Weather App</h1>
    <div>
    <input type='text' placeholder='Search Here' onChange={(e)=>setSearch(e.target.value)}></input>
    <br></br>
    <button onClick={searchPress}>Search</button>
    </div>
    {(typeof weather.main !== "undefined")? (
        <div className='mid'>
        <p>Place: {weather.name}</p>
        <p><i class ="fe-solid fa-fan fa-spin" style={{color:"orange"}}></i></p>
        <p>Cloud/Rain: {weather.weather[0].main}</p>
        <p>Temp: {weather.main.temp}</p>
        <p>Description:({weather.weather[0].description})</p>
        </div>
    ): ("Not Found!!!")}
    </header>
    </div>
  )
}

export default Weather