import { StaticImageData } from "next/image";


export interface CardBlogProps {
    title: string,
    blog: string,
    image: StaticImageData,
    date: string,
    profileImage: StaticImageData,
    author: string,

}