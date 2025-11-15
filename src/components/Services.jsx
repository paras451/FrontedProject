import React from "react";
import { Code2, Cloud, Smartphone, Cpu, Building2 } from "lucide-react"; // lucide-react icons

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-blue-600" />,
      title: "Web & Mobile App Development",
      desc: "Custom, scalable apps designed to deliver performance and user satisfaction across all devices.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
      title: "AI-Driven Product Engineering",
      desc: "Integrating AI and automation to enhance business processes and customer engagement.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-blue-600" />,
      title: "Cloud & API Integration",
      desc: "Seamless integration of third-party services and APIs to power your digital ecosystem.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "UI/UX Design & Optimization",
      desc: "We craft intuitive interfaces with a focus on smooth digital experiences and visual appeal.",
    },
    {
      icon: <Building2 className="w-10 h-10 text-blue-600" />,
      title: "Enterprise Solutions for Web, iOS, and Android",
      desc: "We craft intuitive interfaces with a focus on smooth digital experiences and visual appeal.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-blue-600" />,
      title: "Maintenance and Post-Launch Support",
      desc: "We craft intuitive interfaces with a focus on smooth digital experiences and visual appeal.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gray-50 py-20 px-6 md:px-12 lg:px-24 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Our <span className="text-blue-700">Services</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-400 p-6 text-center flex flex-col items-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
