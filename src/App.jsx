import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)

  const success =(pos) => {
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "f83e9d21e6e9890c4c1aa415f5a4da18"

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    axios.get(URL)
       .then(({data}) => setWeatherInfo(data))
       .catch((err) => console.log(err))
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  const updateWeatherInfo = (data) => {
    setWeatherInfo(data)
  }

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 2000);
  }, [])
  
  return (
    <main>
      
      {isLoading ? (

      //App

      <div className='min-h-screen min-w-full flex items-center justify-center bg-back z-10 absolute'>

      <Weather weatherInfo={weatherInfo} updateWeatherInfo={updateWeatherInfo} />

      </div>
      ):(

      //Loader

      <section className='min-h-screen min-w-full bg-cyan-500 items-center justify-center grid z-20 absolute'>

        <div className='flex flex-col'>

        <article className='grid justify-center m-5'>
        <img src="/images/loader1.png" alt="" />
        </article>

        <h2 className='text-center font-principal-font text-2xl text-white'>Weather App</h2>

        <article 
        className='rounded-3xl m-5 w-[290px] h-5 bg-white animate-progressBar'>
          <div className=' w-[290px] h-5 bg-loader2 rounded-2xl bg-no-repeat bg-center'>
          </div>
        </article>

        </div>
        

      </section>
      )}

      
    </main>
  )
}

export default App
