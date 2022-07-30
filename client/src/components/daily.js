import React from 'react';
import { iconUrlFromCode } from "../weather";

const Daily = ({items}) => {
  return (
    <div className='text-white'>
      <p className='mt-2 ml-24 px-4'>Daily Forecast</p>
      <div className="flex flex-row items-center ml-24 p-4 text-white ">
        <div className="flex flex-col items-center justify-center p-6"></div>
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-10 shadow-lg "
          >
            <p className="font-light text-xl">{item.title}</p>
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