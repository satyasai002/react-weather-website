import './App.css';
import {React,useState,useEffect} from 'react';
import Main from  './components/Main.js';
import Hourly from './components/Hourly';
import getFormattedWeatherData from './weather';

function App() {
  const [query, setQuery] = useState({ q: "rajahmundry" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
useEffect(() => {
  const fetchWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
      console.log(data);
    });
  };
  fetchWeather();
}, [query, units]);
  return (
    <div className="m-12 text-white w-3/4 item-center">
      {weather && (
        <div>
          <Main weather={weather} />
          <Hourly items={weather.hourly} />
        </div>
      )}
    </div>
  );
}

export default App;
