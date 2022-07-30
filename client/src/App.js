import './App.css';
import {React,useState,useEffect} from 'react';
import Main from  './components/Main.js';
import Hourly from './components/Hourly';
import getFormattedWeatherData from './weather';
import Daily from './components/daily';
import Humidity from './components/Humidity';
import { BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Speed from './components/Speed';
import NavBar from './components/Navbar';

function App() {
  const navigate = useNavigate();
  const [query, setQuery] = useState({ q: "vellore" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

useEffect(() => {
  const fetchWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  };
  fetchWeather();
}, [query, units]);
  return (
    <div>
      {weather && (
        <div>
          <NavBar
            setQuery={setQuery}
            units={units}
            setUnits={setUnits}
          ></NavBar>
          <Main weather={weather} />
          <Routes>
            <Route path="/" element={<Hourly items={weather.hourly} />} />
            <Route
              path="/humidity"
              element={<Humidity items={weather.hourly} />}
            />
            <Route path="/speed" element={<Speed items={weather.hourly} />} />
          </Routes>
          <Daily items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
