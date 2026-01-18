import React from "react";
import Hero_Pic from "../../assets/images/help_1.png";

const Hero = () => {
    return (
    <div>
            <section
      id="hero"
      className="relative h-screen"
    >
      {/* Background layer with blur */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${Hero_Pic})` }}
      ></div>

      {/* Overlay tint (optional, makes text more readable) */}
      <div className="absolute inset-0 bg-white/1"></div>

      {/* Content layer */}
      <div className="hero-content relative z-10 flex flex-col w-full md:w-2/3 h-full justify-center items-center md:items-start pt-20 px-4 md:px-10">
        <h1 className="font-serif font-bold text-6xl md:text-7xl text-green-700">
          Integrated <span className="text-yellow-600">Livestock</span> Service Delivery
        </h1>
        <p className="text-2xl font-body text-white">
          Connecting Farmers to Quality Livestock Services- <br />
          <span className="font-bold text-green-600">Anytime</span>,{" "}
          <span className="font-bold text-yellow-600">Anywhere</span>
        </p>
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
    )
}

export default Hero;