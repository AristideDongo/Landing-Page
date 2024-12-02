'use client'
import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonialsData = [
  {
    photo: "",
    name: "John Doe",
    position: "Product Manager",
    company: "TechCorp Inc.",
    feedback: "This is an amazing service. It has completely changed the way I work!",
  },
  {
    photo: "",
    name: "Jane Smith",
    position: "Software Engineer",
    company: "InnovateX",
    feedback: "Fantastic product with excellent customer support!",
  },
  {
    photo: "",
    name: "Sarah Wilson",
    position: "UX Designer",
    company: "Creative Solutions",
    feedback: "Highly recommend to anyone looking to improve their workflow.",
  },
  {
    photo: "",
    name: "Michael Brown",
    position: "Data Analyst",
    company: "DataDriven Co.",
    feedback: "A game-changer for data professionals!",
  },
  {
    photo: "",
    name: "Emily Davis",
    position: "Project Manager",
    company: "Agile Teams",
    feedback: "Boosted my team's productivity significantly!",
  },
];

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Nombre de témoignages par page

  // Calcul des éléments à afficher
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTestimonials = testimonialsData.slice(startIndex, endIndex);

  // Gestion des boutons
  const handleNext = () => {
    if (endIndex < testimonialsData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="w-full bg-gray-800 px-4 py-12 h-[600px] min-h-[500px]">
      <div className="w-[1319px]">
        <div className="flex items-center mx-7 justify-between mb-8 px-4">
          <h2 className="text-[40px] text-white">
          An enterprise template to ramp <br /> up your company website
          </h2>
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              className={`p-7 bg-gray-200 hover:bg-gray-300 rounded-full ${
                startIndex === 0 && "opacity-50 cursor-not-allowed"
              }`}
              disabled={startIndex === 0}
            >
              <FaArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className={`p-7 bg-gray-200 hover:bg-gray-300 rounded-full ${
                endIndex >= testimonialsData.length && "opacity-50 cursor-not-allowed"
              }`}
              disabled={endIndex >= testimonialsData.length}
            >
              <FaArrowRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Grid des témoignages */}
        <div className="grid grid-cols-1 mt-[80px] sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={500}
                height={500}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">
                {testimonial.position} at {testimonial.company}
              </p>
              <p className="text-gray-700 italic mt-4">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
