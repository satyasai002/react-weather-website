import React, { useRef, useState , useEffect } from "react";

import Geocode from "react-geocode";

function NavBar({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");
    
    const handleSearchClick = () => {
      if (city !== "") setQuery({ q: city });
    };
    const findMyLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          setQuery({
            lat,
            lon,
          });
          setCity("")
        });
      }
    };
  return (
    <div>
      <body className="bg-black">
        <nav className="relatve container p-2 mx-auto">
          <div className="flex items-center justify-between">
            <div className="pt-1 text-white w-1/2">
              <button
                to="/"
                className="text-xl md:text-3xl font-semibold hover:cursor-default"
              >
                Weather
              </button>
            </div>
            <div className=" md:flex space-x-7"></div>
            <div className=" lg:flex px-0 space-x-4 mx-0">
              <input
                value={city}
                className="text-white bg-gray-800 w-16 sm:w-36"
                onChange={(e) => setCity(e.currentTarget.value)}
              ></input>
              <button
                className="bg-white rounded-sm p-1"
                onClick={handleSearchClick}
              >
                find
              </button>
              <button
                className="w-6 bg-white rounded-sm p-1 hover:w-8"
                onClick={findMyLocation}
              >
                <img src="./imgs/gps.svg" alt="" />
              </button>
            </div>
          </div>
        </nav>
      </body>
    </div>
  );
}

export default NavBar;
