import { StaticImageData } from "next/image";

export interface CardServiceProps{
    title: string,
    description: string,
    image: StaticImageData,
    buttonText: string
}