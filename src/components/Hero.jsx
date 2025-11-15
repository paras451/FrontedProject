import React from "react";

import heroImage from "../assets/hero.jpeg";

function Hero() {
  return (
    <section
      className="relative text-white flex flex-col items-center justify-center px-6 md:px-16 py-24 md:py-32 overflow-hidden mt-[5.8rem] shadow-[0_-4px_6px_rgba(0,0,0,0.2),0_4px_6px_rgba(0,0,0,0.15)] shadow-cyan-400"
    >
      {/* Background Image with zoom animation */}
      <div
        
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Build <span className="text-blue-400">Powerful</span> Digital Solutions
          <br /> for Web & Mobile
        </h1>

        <p
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 mb-8"
        >
          Transform your business ideas into world-class digital experiences with
          our expert team of developers, designers, and innovators.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-blue-400/30 transition-all"
          >
            Get Started
          </button>

          <button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="border border-gray-300 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold hover:text-blue-300 transition-all"
          >
            View Services
          </button>
        </div>
      </div>

      {/* Floating light effect */}
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute w-64 h-64 bg-blue-500/30 blur-3xl rounded-full top-20 left-10"
      />
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, delay: 1 }}
        className="absolute w-72 h-72 bg-cyan-400/30 blur-3xl rounded-full bottom-10 right-10"
      />
    </section>
  );
}

export default Hero;
