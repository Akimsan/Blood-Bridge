// src/ServicesPage.js
import React from "react";

const services = [
  {
    title: "Blood Donation",
    description:
      "We facilitate voluntary blood donation to help save lives. Donors can schedule an appointment to visit our centers for donation.",
    icon: "https://via.placeholder.com/50?text=B",
    bgColor: "bg-red-100",
    borderColor: "border-red-500",
    titleColor: "text-red-800",
    descriptionColor: "text-red-600",
  },
  {
    title: "Blood Testing",
    description:
      "We offer comprehensive blood testing services to ensure the safety and quality of the donated blood.",
    icon: "https://via.placeholder.com/50?text=T",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-500",
    titleColor: "text-blue-800",
    descriptionColor: "text-blue-600",
  },
  {
    title: "Emergency Blood Supply",
    description:
      "In critical situations, we provide emergency blood supply to hospitals and clinics to meet urgent needs.",
    icon: "https://via.placeholder.com/50?text=E",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-500",
    titleColor: "text-yellow-800",
    descriptionColor: "text-yellow-600",
  },
  {
    title: "Awareness Campaigns",
    description:
      "We conduct educational programs and awareness campaigns to promote the importance of blood donation and encourage more people to donate.",
    icon: "https://via.placeholder.com/50?text=A",
    bgColor: "bg-green-100",
    borderColor: "border-green-500",
    titleColor: "text-green-800",
    descriptionColor: "text-green-600",
  },
];

const ServicesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
        Our Services
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${service.bgColor} border-2 ${service.borderColor}`}
          >
            <div className="flex items-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mr-4"
              />
              <h2 className={`text-2xl font-semibold ${service.titleColor}`}>
                {service.title}
              </h2>
            </div>
            <p className={`text-gray-700 ${service.descriptionColor}`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
