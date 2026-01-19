import React, { useState, useEffect } from "react";
import Hero_Pic from "../../assets/images/help_1.png";
import Livestock from "../../assets/images/livesock.jpg";
import Livestock2 from "../../assets/images/livestock2.png";
import Livestock3 from "../../assets/images/livestock3.jpg";
import Livestock4 from "../../assets/images/livestock4.png";

const images = [Hero_Pic, Livestock, Livestock2, Livestock3, Livestock4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section id="hero" className="relative h-screen overflow-hidden">
        {/* Background slideshow */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        {/* Overlay tint */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content layer */}
        <div className="hero-content relative z-10 flex flex-col w-full md:w-2/3 h-full justify-center items-center md:items-start pt-20 px-4 md:px-10">
          <h1 className="font-serif font-bold text-6xl md:text-7xl text-white">
            Integrated <span className="text-green-700">Livestock</span> Service Delivery
          </h1>
          <p className="text-2xl font-body text-white mt-4">
            Connecting Farmers to Quality Livestock Services- <br />
            <span className="font-bold text-green-600">Anytime</span>,{" "}
            <span className="font-bold text-yellow-600">Anywhere</span>
          </p>
          <p className="text-white font-medium pt-6">ILSD is a digital livestock service delivery platform connecting farmers with certified AI technicians, veterinarians, and livestock experts across North Shewa.</p>
          <div className="flex md:flex-row flex-col gap-5 md:gap-10 py-10">
            <button className="bg-green-700 border border-green-700 font-semibold text-lg hover:bg-white hover:text-green-700 text-white px-4 py-2 rounded-sm transition-colors duration-300 shadow cursor-pointer">
              Learn More
            </button>
            <button className="bg-white border border-green-700 font-semibold text-lg hover:bg-green-700 hover:text-white text-green-700 px-4 py-2 rounded-sm transition-colors duration-300 shadow cursor-pointer">
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;