import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Services = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000,
  //     offset:120,
  //     once: false,
  //   });
  // }, []);

  return (
    <section className="py-20 bg-gray-50 px-6 mt-10">
      <div className="relative max-w-6xl mx-auto text-center pt-10 justify-center items-center  h-80 overflow-hidden rounded-3xl">
        <div className="animated-bg"></div>
        <style>{`
.animated-bg {
position: absolute;
inset: 0;
background: linear-gradient(120deg, #ff8a8a, #8ab6ff, #ffd18a);
background-size: 300% 300%;
animation: gradientMove 10s ease infinite;
opacity: 0.6;
}


@keyframes gradientMove {
0% { background-position: 0% 50%; }
50% { background-position: 100% 50%; }
100% { background-position: 0% 50%; }
}
`}</style>

        <h2
          className="text-[60px] font-bold text-gray-800 mb-4 relative"
          data-aos="flip-up"
        >
          Our <span className="text-blue-700">Services</span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto relative" data-aos="fade-up">
          We craft high-performance, scalable digital solutions designed to
          transform ideas into real-world impact. Explore what we offer.
        </p>
      </div>
      <div className="max-w-6xl mx-auto text-center p-5  mt-30 md:h-140  sm:h-full ">
        {/* === Services Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* === Service Card 1 === */}
          <div
            className="bg-white shadow-md rounded-2xl p-8 h-60  hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Web App Development
            </h3>
            <p className="text-gray-600">
              Custom, responsive, and high-performing web apps built using the
              latest technologies for seamless digital experiences.
            </p>
          </div>

          {/* === Service Card 2 === */}
          <div
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Mobile App Development
            </h3>
            <p className="text-gray-600">
              Scalable iOS and Android applications designed to deliver smooth,
              secure, and modern user experiences.
            </p>
          </div>

          {/* === Service Card 3 === */}
          <div
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              UI / UX Design
            </h3>
            <p className="text-gray-600">
              Clean, intuitive, and conversion-focused design systems that bring
              life and clarity to your product.
            </p>
          </div>

          {/* === Service Card 4 === */}
          <div
            className="bg-white shadow-md rounded-2xl h-60 p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Custom Software Solutions
            </h3>
            <p className="text-gray-600">
              Tailored software applications that fit your business workflows
              and boost operational efficiency.
            </p>
          </div>

          {/* === Service Card 5 === */}
          <div
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              API & Integration
            </h3>
            <p className="text-gray-600">
              Seamless integrations and scalable API solutions that connect your
              systems and automate complex tasks.
            </p>
          </div>

          {/* === Service Card 6 === */}
          <div
            className="bg-white shadow-md rounded-2xl p-8 hover:shadow-[0_0_25px_#3b82f6] transition-all duration-300"
            data-aos="fade-down"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Maintenance & Support
            </h3>
            <p className="text-gray-600">
              Long-term support, optimization, and upgrades to ensure your
              product stays future-ready and secure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
