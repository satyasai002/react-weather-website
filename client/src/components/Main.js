import React from 'react';

import { formatToLocalTime, iconUrlFromCode } from "../weather.js";

import {} from "react-router";
import { useNavigate } from "react-router-dom";

const Main = ({
  weather: {
    dt,
    timezone,
    name,
    country,
    temp_min,
    temp_max,
    humidity,
    speed,
    temp,
    details,
    icon
  },
}) => {
  const navigate = useNavigate();
  return (
    <div className="App text-white mx-24 mt-2 ">
      <div className="flex ">
        <div className="flex flex-row flex-auto p-4">
          <div className=" mb-2">
            <img src={iconUrlFromCode(icon)} alt="" />
          </div>
          <div className="flex flex-row">
            <p className="px-2 text-7xl align-center">{`${temp.toFixed()}°`}</p>
            <button className="flex">
              <p className="px-1 text-xl ">C</p>
            </button>
            <p className="px-1">|</p>
            <button className="flex">
              <p className="px-1 text-xl ">F</p>
            </button>
          </div>
          <div className="text-sm px-1 font-light">
            <p>Temp_max: {temp_max}°C</p>
            <p>Temp_min: {temp_min}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind: {speed}km/h</p>
          </div>
        </div>
        <div className="text-3xl p-4 ">
          <div>
            <p className="text-right">{`${name}, ${country}`}</p>
            <p className="text-center text-lg font-light">
              {formatToLocalTime(dt, timezone)}
            </p>
            <p className="text-right text-lg font-light">{details}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-4">
        <div className="flex flex-auto">
          <div className="p-2"></div>
          <div className="p-2 text">
            <button onClick={() => navigate("/")}>Temperature</button>
          </div>
          <p className="p-2">|</p>
          <div className="p-2 text">
            <button onClick={() => navigate("/humidity")}>Humidity</button>
          </div>
          <p className="p-2">|</p>
          <div className="p-2 text">
            <button onClick={() => navigate("/speed")}>Wind</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;