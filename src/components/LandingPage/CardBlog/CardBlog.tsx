import { CardBlogProps } from "@/types/CardBlog";
import Image from "next/image";

const CardBlog: React.FC<CardBlogProps> = ({ 
  title, 
  blog, 
  image, 
  date, 
  profileImage, 
  author 
}) => {
  return (
    <div className="max-w-sm overflow-hidden">
      {/* Image */}
      <div className="h-48">
        <Image
          src={image}
          alt={`Image for ${title}`}
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Date */}
        <p className="text-sm text-gray-500">{date}</p>

        {/* Blog Text */}
        <h2 className="text-lg font-semibold text-gray-800 mt-2">
          {title}
        </h2>
        <p className="text-gray-600 mt-2">
          {blog}
        </p>

        {/* Profile Section */}
        <div className="flex items-center mt-4">
          <Image
            src={profileImage}
            alt={author}
            width={100}
            height={100}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <p className="text-sm text-gray-500">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
