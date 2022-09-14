import React from 'react';
import Cropper from 'react-easy-crop';
const Speed = ({ items }) => {
  console.log(items[2].deg)
  return (
    <div className="flex flex-row items-center ml-8  text-white w-screen">
      <div className="flex flex-col items-center justify-center "></div>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-10 shadow-lg "
        >
          <p className="flex font-light  ">{`${item.deg} deg`}</p>
          <p className="flex font-light ">{`${item.speed} Km/h`}</p>
          <p className="flex font">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Speed;