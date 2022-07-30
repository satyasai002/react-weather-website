import React from 'react';
import Cropper from 'react-easy-crop';
const Speed = ({ items }) => {
  console.log(items[2].deg)
  return (
    <div className="flex flex-row items-center ml-24  text-white ">
      <div className="flex flex-col items-center justify-center "></div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-10 shadow-lg "
        >
          <img
            key={index}
            src="./imgs/down.svg"
            className={`rotate-[${item.deg}deg]`}
          ></img>

          <p className="font-light ">{item.title}</p>
          <p className="font-medium">{item.speed}</p>
        </div>
      ))}
    </div>
  );
};

export default Speed;