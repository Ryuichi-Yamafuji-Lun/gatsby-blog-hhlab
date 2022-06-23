import React, { useState } from 'react'

function Weather() {
    const [data, setData] = useState([{}])
    const [location, setLocation] = useState('')
    const apikey = '1886066329b7da92a4ba5264981d1577'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apikey}`
    //change to not event enter but the location of the card
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
        fetch(url).then(
            response => response.json()
            ).then(
                data => {
                    setData(data)
                })
        }
    }

return (
    <div className="weather">
        <div className="search">
            <input
            value={location}
            onChange={event => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder='Enter Location'
            type="text" />
        </div>
        <div className="main">
            <div className="location">
                <p>{data.name}</p>
            </div>
            <div className="temp">
                {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className="description">
                {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
            <div className="humidity">
                <p>Humidity</p>
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
                <p>Wind Speed</p>
                {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} km/hr</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Weather;