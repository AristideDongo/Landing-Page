'use client'
import CardService from "@/components/LandingPage/CardService/CardService";
import HeroSection from "@/components/Header/HeroSection";
import ImageCard from "@/images/card image/undraw_Business_deal_re_up4u.png"
import ImageCard2 from "@/images/card image/Revenue-rafiki.png"
import CardSectionMid from "@/components/LandingPage/CardService/CardSectionMid";
import CardSectionMidtwo from "@/components/LandingPage/CardService/CardSectionMidtwo";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from 'next/image';
import ImageEquip from "@/images/card image/iStock-1185622398-1.jpg"
import { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import CardBlog from "@/components/LandingPage/CardBlog/CardBlog";
import { BlogData } from "@/data/Blog";

export default function Home() {

  const [open, setOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpen(open === index ?null: index)
  }

  const faqs = [
    { question: "What services do you offer?", answer: "We offer a wide range of services including..." },
    { question: "How do I get started?", answer: "You can start by signing up on our website..." },
  ]

  return (
    <>
      <HeroSection />
      <section className="bg-white">
        <div className="mx-[60px] mt-[90px] flex flex-col items-center justify-center">
          <p className="text-center mb-4 w-full text-gray-400 text-[20px]">
            Our Service
          </p>
          <h2 className="text-center text-[40px] text-gray-800 font-meduim mb-10">
            Handshake infographic mass market
            <br /> crowdfunding iteration.
          </h2>
      <div className="flex justify-center space-x-6 flex-wrap">
        <CardService
          image={ImageCard}
          title="Cool feature title"
          description="Ceci est la description de la première carte."
          buttonText="Explore page"
        />
        <CardService
          image={ImageCard2}
          title="Even cool feature"
          description="Ceci est la description de la deuxième carte."
          buttonText="Explore page"
        />
        <CardService
          image={ImageCard}
          title="Another cool feature"
          description="Ceci est la description de la troisième carte."
          buttonText="Explore page"
        />
      </div>
      <CardSectionMid />
      <div className="mt-[220px]">
      <CardSectionMidtwo />
      </div>
      <div className="mt-[250px]">
      <Testimonials />
      <div className=" mt-[150px] h-[400px] mx-[60px]">
        <Image 
        src={ImageEquip}
        alt=""
        width={1000}
        height={1000}
        className="w-full h-full object-cover rounded-xl"
        />
        <div className="mt-[50px] mb-[50px]">
          <div className="flex items-center justify-between">
          <h1 className="text-start text-[35px] text-gray-800 font-meduim mb-10">
            We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.
            </h1>
            <div className="w-[50%]">
              {faqs.map((faq, index) => (
                <div
                key={index}
                className="border-b border-gray-300 p-4 cursor-pointer"
                onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-800 font-medium text-[20px]">{faq.question}</h3>
                    {open === index ? (
                      <FaArrowCircleUp size={40} className="text-gray-800" />
                    ) : (
                      <FaArrowCircleDown size={40} className="text-gray-800" />
                    )}
                  </div>
                  {open === index && (
                    <p className="mt-2 text-gray-600 text-[17px] font-medium">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
        </div>
        {/* Blog */}
        <div className="mx-[40px] mt-[400px] flex flex-col items-center justify-center">
        <p className="text-center mb-4 w-full text-gray-400 text-[20px]">
            Our Blog
          </p>
          <h2 className="text-center text-[40px] text-gray-800 font-meduim mb-10">
          Value proposition accelerator product
            <br /> management venture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {BlogData.map((blog, i) => (
            <CardBlog key={i} {...blog} />
          ))}
          </div>
          <button
            className="bg-transparent text-gray-800 hover:bg-gray-800 border-2 border-gray-800 hover:text-white font-bold py-3 px-12 text-[16px] rounded-full mt-8 transition duration-300" 
          >
            Load More
          </button>
        </div>
      </section>
    </>
  );
}
