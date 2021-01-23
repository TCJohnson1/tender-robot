import React, {useState} from 'react'
import './App.css';
import Form from './Form'
import Weather from './Weather'


function App() {
  const [weather, setWeather] = useState([])
  const APIKEY = 'd51cc0f7fce0c183ac7014acbe47c6e7'

  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
    .then(res => res.json())
    .then(data => data)
    setWeather({
      city: apiData.name,
      country: apiData.sys.country,
      temperature: apiData.main.temp,
      description: apiData.weather[0].description,
      error: ''
    }
    )
  }

  return (
    <div className="App">
      <h2>Weather</h2>
      <Form getWeather={fetchData} />
      <Weather 
      city={weather.city}
      country={weather.country}
      temperature={weather.temperature}
      description={weather.desctiption}
      error={weather.error}
      />
      {console.log(weather.data)}
    </div>
  );
}

export default App;
