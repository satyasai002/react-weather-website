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
        });
      }
    };
  return (
    <div>
      <body className="bg-Rgba(236,110,76,1)">
        <nav className="relatve container p-2 mx-auto">
          <div className="flex items-center justify-between">
            <div className="pt-1 text-white w-96">
              <button
                to="/"
                className="text-3xl font-semibold hover:cursor-default"
              >
                Weather
              </button>
            </div>
            <div className="hidden md:flex space-x-7">
              <button
                to="/myrides"
                name="/myrides"
                className="font-semibold hover:font-bold  text-white hover:underline"
              >
                Delhi
              </button>
              <button
                to="/newride"
                className="font-semibold hover:font-bold  text-white hover:underline"
              >
                Chennai
              </button>
            </div>
            <div className="hidden lg:flex px-0 space-x-4 mx-0">
              <input
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
              ></input>
              <button onClick={handleSearchClick}>search</button>
              <button
                to="/login"
                className="w-6 hover:w-8"
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
