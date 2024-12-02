import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import ImageBg from "@/images/card image/R.jpg"
import ImageChart from "@/images/card image/Growth curve-cuate.png"


export default function CardSectionMid() {
  return (
    <section className="flex items-center justify-between p-8">
        <div className="relative w-2/3">
            <Image
                src={ImageBg}
                alt=""
                width={1000}
                height={1000}
                className='w-full h-full object-cover rounded-lg'
            />
            <div className="absolute top-[110%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-md z-50">
                <Image
                    src={ImageChart}
                    alt=""
                    height={1000}
                    width={1000}
                className='object-cover'
                />
                <p className='text-[15px] text-gray-700 font-light text-center'>More income in june</p>
            </div>
        </div>
    
           
            <div className="ml-[60px] w-2/3 pl-8">
                <h2 className='text-[35px] text-gray-800 mb-4'>
                We connect our customers with the best, and help them keep up-and stay open.
                </h2>
                <ul className='space-y-4'>
                    <li className="flex items-center text-[20px] text-gray-800">
                    <FaCheckCircle size={30} className=" text-gray-800 mr-2" />
                    We connect our customers with the best.
                    </li>
                    <li className="flex items-center text-[20px] text-gray-800">
                    <FaCheckCircle  size={30} className=" text-gray-800 mr-2" />
                    Advisor success customer launch party.
                    </li>
                    <li className="flex items-center text-[20px] text-gray-800">
                    <FaCheckCircle  size={30} className=" text-gray-800 mr-2" />
                    Business-to-consumer long tail.
                    </li>
                </ul>
                <button className='mt-6 px-7 py-3 font-semibold bg-gray-800 text-white rounded-full hover:scale-95 transition duration-300'>
                    Start Now
                </button>
            </div>
    </section>
  )
}