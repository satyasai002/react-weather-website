import React from 'react';
import { iconUrlFromCode } from "../weather";

const Daily = ({items}) => {
  return (
    <div className='text-white'>
      <p className='mt-2  px-4'>Daily Forecast</p>
      <div className="flex flex-row items-center sm:p-4 text-white ">
        <div className="flex flex-col items-center justify-center "></div>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 sm:p-8 shadow-lg "
          >
            <p className="font-light text-lg sm:text-xl">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-18 my-1 "
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Daily;