import { useState } from "react"
import { kToC, kToF } from "../utils/temp"
import { typesWeather } from "../utils/typesOfWea"
import axios from "axios"

const Weather = ({weatherInfo, updateWeatherInfo}) => {
  
  const [isCelsius, setIsCelsius] = useState(true)

  const handleChangeTemp = () => {
    setIsCelsius(!isCelsius)
  }

  const [country, setCountry] = useState(null)

  const hanldeSubmit = (e) =>{
    e.preventDefault()
    const name = e.target.name.value
    
    const API_KEY = "f83e9d21e6e9890c4c1aa415f5a4da18"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`
    
    axios.get(URL)
    .then(({data}) => {setCountry(data)
      updateWeatherInfo(data)})
      .catch((err) => console.log(err))
    
    e.target.reset()
  }

  return (
    <section className="font-principal-font bg-weather bg-no-repeat bg-contain bg-center sm:w-[400px] grid grid-rows-3">

      {/* Top */}
      <section className="grid items-center justify-center">
       
        {/* Search*/}
        <div className="flex rounded-2xl overflow-hidden">
         <form onSubmit={hanldeSubmit} 
         className="max-w-max" action="">
          <input 
          id="name" 
          type="text" 
          placeholder="Search Country ..." className="outline-none px-16 py-[.1rem]"/>
         </form>
        </div>
        
      </section>

      {/* Middle */}
      <section className="content-center px-4">
        {/* Weather App */}
        <article className="grid grid-cols-2 p-1">
          
          <span className="w-auto text-5xl my-8 mr-8">
          {isCelsius ? kToC(weatherInfo?.main.temp): kToF(weatherInfo?.main.temp)}
          </span>

          <div className="row-span-3 p-6 pl-8 pr-4 -translate-y-5">
            <img src={typesWeather[weatherInfo?.weather[0].icon]} 
            className="container" alt="" />
          </div>

          <article className="row-start-2 flex items-center gap-2">
            <div>
              <img src="/images/wind.svg" className="h-5 w-5" alt="" />
            </div>
            <span>{weatherInfo?.wind.speed}m/s</span>
          </article>

          <article className="row-start-3 flex items-center gap-2">
            <div>
              <img src="/images/humidity.svg" className="h-5 w-5" alt="" />
            </div>
            <span>{weatherInfo?.main.humidity}%</span>
          </article>

          <article className="row-start-4 flex items-center gap-2">
            <div>
              <img src="/images/pressure.svg" className="h-5 w-5" alt="" />
            </div>
            <span>{weatherInfo?.main.pressure}hPa</span>
          </article>
        </article>

        <article className="flex justify-around items-center">
          
          <h2 className="text-lg w-[180px] text-ellipsis overflow-hidden whitespace-nowrap">{weatherInfo?.name} {weatherInfo?.sys.country}</h2>

          <h3 className="capitalize">{weatherInfo?.weather[0].description}</h3>
        
        </article>
      </section>

      {/* Bottom */}
      <section className="grid justify-center items-center">
        
        <button onClick={handleChangeTemp} 
        className="py-1 px-3 rounded-lg bg-slate-500 hover:bg-gray-700 text-white mb-24"
        > °F / °C </button>
      </section>

    </section>
  )
}

export default Weather

