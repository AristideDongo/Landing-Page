import { CardServiceProps } from "@/types/CardService";
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const CardService: React.FC<CardServiceProps> = ({title, description, image, buttonText}) => {

    const trucateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    }

    return (
        <div className="bg-transparent h-[480px] mb-[40px] flex flex-col items-start space-y-4 p-4 overflow-hidden max-w-full">
            {/* Image */}
            <Image
                src={image}
                alt={title}
                width={1000}
                height={100}
                className="w-full h-[300px] object-cover"
            />
            {/* Titre */}
            <h2 className="text-xl font-semibold text-gray-800 text-left break-words overflow-hidden">{trucateText(title, 20)}</h2>
            {/* Description */}
            <p className="text-gray-600 text-left break-words overflow-hidden">{trucateText(description, 80)}</p>
            {/* Bouton */}
            <button className="flex text-[20px] items-center  px-3 py-2 bg-transparent text-gray-800 border-b-2 border-gray-800 hover:scale-95 duration-300 transition">
                {buttonText} <FaArrowRight className="ml-2" />
            </button>
        </div>
    );
}

export default CardService;
