import React, { useState } from "react";

const Industries = () => {
  const [showOther, setShowOther] = useState(false);

  return (
    <section id="industries" className="py-16 bg-gray-50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4"><span className="text-blue-700">Industries</span> We Serve</h2>
        <p className="text-cyan-500 max-w-3xl mx-auto mb-10 hover:underline cusror-pointer">
          We specialize in building scalable, high-performance digital solutions across key industries.
        </p>

        {/* === Healthcare === */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10 text-left hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Healthcare</h3>
          <p className="text-gray-600 mb-4">
            Bringing innovation and precision to healthcare technology. Our solutions empower hospitals,
            assisted living facilities, and pharmacies with scalable and compliant digital systems.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Custom EMAR Software Development</li>
            <li>Pharmacy Management Platforms</li>
            <li>Medicine Search & Inventory Systems</li>
            <li>Appointment & Patient Tracking Portals</li>
            <li>Healthcare Staff Coordination Apps</li>
          </ul>
        </div>

        {/* === eCommerce === */}
        <div className="bg-white rounded-2xl shadow-md p-8 mb-10 text-left hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">E-Commerce</h3>
          <p className="text-gray-600 mb-4">
            We build robust eCommerce platforms optimized for performance, usability, and conversions —
            empowering brands to grow and scale digitally.
          </p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Shopify, WooCommerce & Custom Store Development</li>
            <li>Product Search & Recommendation Systems</li>
            <li>Secure Payment Gateway Integration</li>
            <li>Inventory, Order & Subscription Management</li>
            <li>Mobile App Integration (iOS & Android)</li>
          </ul>
        </div>

        {/* === Toggle Button === */}
        <button
          onClick={() => setShowOther(!showOther)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
        >
          {showOther ? "Hide Other Industries" : "Show Other Industries"}
        </button>

        {/* === Other Industries === */}
        {showOther && (
          <div className="mt-10 bg-white rounded-2xl shadow-md p-8 text-left animate-fadeIn">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Other Industries</h3>
            <p className="text-gray-600 mb-4">
              Apart from Healthcare and eCommerce, we have extensive experience building solutions across multiple domains.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>CRM, HRMS, and ATS Platforms</li>
              <li>Wellness & Fitness Applications</li>
              <li>Learning & Quiz Platforms</li>
              <li>B2B and B2C Portals</li>
              <li>SaaS & Automation Systems</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Industries;