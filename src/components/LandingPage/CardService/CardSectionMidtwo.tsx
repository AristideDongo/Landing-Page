import Image from 'next/image';
import { FaFeather } from 'react-icons/fa';
import ImageBg from "@/images/card image/pexels-polina-zimmerman-3746966.jpg"
import ImageChart from "@/images/card image/Growth curve-cuate.png"
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';


export default function CardSectionMidtwo() {
  return (
    <section className="flex items-center justify-between p-8"> 
            <div className="ml-[60px] w-2/3 pl-8">
                <h2 className='text-[35px] text-gray-800 mb-14'>
                We connect our customers with the best, and help them keep up-and stay open.
                </h2>
                <ul className='space-y-8'>
                    <li className="flex items-center p-4 text-[20px] text-gray-800">
                    <FaFeather size={30} className=" text-gray-800 mr-2" />
                    We connect our customers with the best.
                    </li>
                    <li className="flex items-center p-4 rounded-md bg-gray-800 w-[450px] text-[20px] text-white">
                    <IoEyeOutline  size={30} className=" text-white mr-2" />
                    Advisor success customer launch party.
                    </li>
                    <li className="flex items-center p-4 text-[20px] text-gray-800">
                    <MdOutlineWbSunny  size={30} className=" text-gray-800 mr-2" />
                    Business-to-consumer long tail.
                    </li>
                </ul>
            </div>

            <div className="relative w-2/3">
            <Image
                src={ImageBg}
                alt=""
                width={1000}
                height={1000}
                className='w-full h-[600px] object-cover rounded-lg'
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
    </section>
  )
}