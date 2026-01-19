import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "What is Integrated Livestock Service Delivery (ILSD)",
    answer:
      "ILSD is a digital livestock service delivery platform that connects livestock farmers with certified artificial insemination (AI) technicians, veterinarians, and livestock specialists. The platform aims to improve access to timely, quality, and reliable livestock services across North Shewa, Ethiopia.",
  },
  {
    question: "Who can use ILSD services?",
    answer:
      "ILSD services are available to smallholder farmers, livestock cooperatives, youth and women livestock producers, and small to medium livestock enterprises such as dairy farms and fattening units.",
  },
  {
    question: "What types of services does ILSD provide?",
    answer:
      "ILSD provides artificial insemination and reproductive health services, veterinary diagnosis and treatment, vaccination and disease prevention, pregnancy diagnosis, livestock nutrition and breeding advisory services, and digital livestock record keeping.",
  },
  {
    question: "How do farmers request a service?",
    answer:
      "Farmers can request services through simple digital channels. Initially, ILSD supports basic phone and SMS-based access, with plans to expand to mobile and web-based service requests as the platform grows.",
  },
  {
    question: "How are service providers selected?",
    answer:
      "All service providers working with ILSD are verified and certified professionals, including AI technicians, veterinarians, and livestock specialists. ILSD follows standardized service protocols and regularly monitors service quality.",
  },
  {
    question: "How do payments work?",
    answer:
      "During the initial phase, farmers pay service providers directly in cash. As the platform develops, ILSD will gradually introduce digital and mobile payment options to improve convenience and transparency.",
  },
  {
    question: "Where does ILSD operate?",
    answer:
      "ILSD currently operates in North Shewa Zone, Amhara Region, starting from Debre Birhan and expanding to surrounding woredas and kebeles, including rural, peri-urban, and urban areas.",
  },
  {
    question: "Is ILSD a government service?",
    answer:
      "No. ILSD is a private digital service platform that works in collaboration with government livestock offices, cooperatives, and other stakeholders to complement and strengthen existing livestock service delivery systems.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
        <Navbar />
        <div className="px-6 py-10 mt-16 max-w-4xl mx-auto">
        
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 ">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-green-700 rounded-xl p-4 bg-white shadow-md"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-green-800">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaTimes className="text-green-700" />
                ) : (
                  <FaPlus className="text-green-700" />
                )}
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-700 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        
      </div>
        <Footer />
    </div>
    
  );
};

export default FAQ;