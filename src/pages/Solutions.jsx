import React from "react";

const Solutions = () => {
  const solutions = [
    {
      title: "CRM, HRMS & ATS Systems",
      desc: "Empower teams with seamless workflow, analytics, and smart automation designed for growing organizations.",
      icon: "💼",
    },
    {
      title: "Wellness & Fitness Platforms",
      desc: "Encourage engagement and lifestyle tracking through gamified and interactive fitness applications.",
      icon: "💪",
    },
    {
      title: "Learning & Quiz Apps",
      desc: "Drive knowledge sharing and gamified learning experiences for both education and corporate training.",
      icon: "📚",
    },
    {
      title: "B2B & B2C Platforms",
      desc: "Enable transactions, communication, and scalability with secure, user-friendly web and mobile platforms.",
      icon: "🌐",
    },
    {
      title: "Custom Business Automation",
      desc: "Digitize manual operations for speed, accuracy, and better insights across your entire organization.",
      icon: "⚙️",
    },
  ];

  return (
    <section  className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 mt-15">
      <div className="max-w-7xl mx-auto text-center  md:h-80  ">
        <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6 pt-20" data-aos="flip-up">
          Our Tailored <span className="text-blue-700">Solutions</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 " data-aos="fade-up">
          We provide specialized digital solutions that simplify complex
          processes and accelerate growth.
        </p>
        </div>

        <div className="max-w-7xl mx-auto text-center  mt-10 p-5">

        <div className="flex flex-wrap justify-center gap-10 ">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-blue-50 to-cyan-300 shadow-lg hover:shadow-2xl rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-4 duration-300 w-[90%] sm:w-[45%] lg:w-[28%] " data-aos="flip-up"
            >
              <div className="bg-blue-600 text-white text-4xl w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Solutions;
