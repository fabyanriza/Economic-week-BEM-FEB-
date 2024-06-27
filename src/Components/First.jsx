import React, { useState } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import buttonImage from "../assets/arrow right.png";
import firstbg from "../assets/bg-first.png";

function First() {
  const data = [
    {
      text: "IDSC",
      img: image1,
    },
    {
      text: "EFESTAPHORIA",
      img: image2,
    },
    {
      text: "SOCIAL ACTION",
      img: image3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-yellow-100 h-[600px] flex items-center justify-center relative">
      <img src={firstbg} alt="" className="absolute w-full" />
      <button onClick={prevSlide} className="absolute left-0 ml-16">
        <img
          src={buttonImage}
          alt="Previous"
          className="transform rotate-180 w-30 h-30"
        />
      </button>
      <div className="relative w-[876px] h-[517px] flex items-center justify-center overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-500 ease-out ${
              index === currentIndex
                ? "transform translate-x-0"
                : "transform translate-x-full"
            }`}
          >
            <h1 className="absolute inset-0 flex items-center justify-center text-blue-300 text-6xl font-extrabold font-custom tracking-[1rem]">
              {item.text}
            </h1>
            <img
              src={item.img}
              alt={item.text}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="absolute right-0 mr-16">
        <img src={buttonImage} alt="Next" className="w-30 h-30" />
      </button>
    </div>
  );
}

export default First;
