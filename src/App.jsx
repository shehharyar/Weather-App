import { useEffect,useState } from "react";
import "./App.css";
import './cloud.png'

import axios from 'axios'
function App() {
  const [ city, setCity ] = useState("");
  const[weather,setWeather]= useState("");
const [data,setData]= useState("") ;

  useEffect(() =>{
callToAPI('karachi')
  },[])
  const getWeather=(e)=>{
    e.preventDefault(); 
    // console.log(city)
callToAPI(city)
    
  }
  const callToAPI =(cityName) =>{
    setCity(cityName);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b3d715fb8e6de6942ec8d37825401b5a`)
  .then(function (response) {
    // handle success
    console.log(response);
    //  console.log(weather);
    setWeather((response.data.main.temp - 273.15).toFixed(2))
setData(response.data.main.humidity);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  }
  return (  


    <div className="container">
    
    <div  className="inner-container">
 <img src="./images/" alt="" />
      <h2>Weather App</h2>
      <form onSubmit={getWeather}>

        <input className="search"
          type="text"
          placeholder="Enter City name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input className="btn" type="submit" value="search" />
      </form>
      <p>Location is {city}</p>
      <p>{weather}</p>
<p>the hummidity is {data}</p>
    </div>
    </div>
  );
}

export default App;
