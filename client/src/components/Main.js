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
    <div className="App text-white mx-8 mt-2 ">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col md:flex-row flex-auto p-4">
          <div className=" mb-2 w-12 md:w-auto">
            <img src={iconUrlFromCode(icon)} alt="" />
            <div className="flex flex-row">
              <p className=" px-2 text-xl md:text-7xl align-center">{`${temp.toFixed()}°`}</p>
              <button className="flex">
                <p className="px-1 text-sm md:text-xl ">C</p>
              </button>
            </div>
          </div>

          <div className="text-xs md:text-sm px-1 font-light">
            <p>max: {temp_max}°C</p>
            <p>min: {temp_min}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind: {speed}km/h</p>
          </div>
        </div>
        <div className="text-lg md:text-3xl p-4 ">
          <div>
            <p className="md:text-right text-xl md:text-3xl">{`${name}, ${country}`}</p>
            <p className="md:text-right text-lg font-light">
              {formatToLocalTime(dt, timezone)}
            </p>
            <p className="md:text-right text-lg font-light">{details}</p>
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