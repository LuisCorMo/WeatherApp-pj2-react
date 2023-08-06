import axios from "axios"
import { useState } from "react"

const SearchBar = () => {

  const [countries, setCountries] = useState(null)

  const hanldeSubmit = (e) =>{
    e.preventDefault()
    const name = e.target.name.value
    const API_KEY = "f83e9d21e6e9890c4c1aa415f5a4da18"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`

    axios.get(URL)
       .then(({data}) => setCountries(data))
       .catch((err) => console.log(err))
  }

  return (
    <div className="flex rounded-md overflow-hidden">
      <form onSubmit={hanldeSubmit} className="max-w-max">
        <input id="name" type="text" placeholder="Select Country ..." className="outline- px-2"/>
        <button className="p-2">Search</button>
      </form>
    </div>
  )
}
export default SearchBar