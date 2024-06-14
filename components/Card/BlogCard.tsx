import React from "react";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  author: string;
  thumbnail: any;
}

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  description,
  publishDate,
  author,
  thumbnail,
}) => {
  return (
    <div className="container flex sm:justify-center md:justify-start lg:justify-start sm:flex-wrap p-4 my-10 shadow-md shadow-darkGray  ">
      <img
        className=" md:w-[300px]  lg:w-[300px] md:mr-8 lg:mr-8 sm:mr-0 sm:mb-4 md:mb-0 lg:mb-0 rounded-[20px]"
        src={`${thumbnail}`}
        alt=""
      />
      <div className="flex flex-col sm:ml-3 md:ml-0 lg:ml-0 w-[600px] justify-center">
        <div className="flex mb-2 gap-4">
          <div>
            <time className="sm:text-[15px] text-gray-400">{publishDate}</time>
          </div>
          <div>
            <time className="text-[12px] text-gray-400">• {author}</time>
          </div>
        </div>
        <h2 className="font-semibold font-neueMachina text-lightGreen text-xl">
          {title}
        </h2>
        <h4 className="font-neueMachina mt-2 overflow-wrap: break-words line-clamp-6 text-[#d6d6d6] sm:w-[350px] lg:w-full md:w-full ">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
