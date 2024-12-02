'use client'
import Image from "next/image";
import ImageHero from "@/images/hero assets/Site Stats-rafiki.png";
import LogoImage from "@/images/hero assets/X.png"
import { motion } from "framer-motion"

export default function HeroSection() {

    const logos = [
        LogoImage,
        LogoImage,
        LogoImage,
        LogoImage,
        LogoImage,
    ]

    const dupicateLogos = [...logos, ...logos];

    return (
        <section className="bg-gray-800 shadow-xl">
            <div className="mx-[60px] flex flex-col md:flex-row items-center py-4 px-5">
                {/* Texte et Boutton */}
                <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
                    <h1 className="text-4xl font-bold text-white">
                        Save time by building fast with Boldo Template
                    </h1>
                    <p className="mt-4 text-lg text-gray-400">
                        Funding handshake buyer business metrics iPad partnership.
                        First mover advantage innovator success deployment non-disclosure.
                    </p>
                    <div className="mt-6 flex justify-center md:justify-start">
                        <button
                            className="bg-green-500 text-[20px] text-black font-semibold py-3 px-12 rounded-full border-[2px] border-green-500 hover:bg-transparent hover:text-green-500 duration-300 transition"
                        >
                            Buy template
                        </button>
                        <button
                            className="bg-transparent border-[2px] font-semibold border-white rounded-full py-3 px-12 text-white ml-5 hover:bg-white hover:text-black duration-300 transition"
                        >
                            Explore
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="md:w-1/2 mt-10 md:mt-0 order-1 md:order-2">
                    <Image
                        src={ImageHero}
                        alt="Hero image"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Slider Logos */}
            <div className="overflow-hidden pb-20 -mt-16 mx-[60px]">
                <motion.div
                    className="flex space-x-7 w-max"
                    initial={{ x: 1 }}
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 13,
                    }}
                >
                    {dupicateLogos.map((logo, index) => (
                        <div key={index} className="w-28 h-14 flex-shrink-0">
                            <Image
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
