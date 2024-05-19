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
    <div className="flex flex-cols p-4">
      <img
        className="w-[300px] mr-8 rounded-[20px]"
        src={`${thumbnail}`}
        alt=""
      />
      <div className="flex flex-col w-[600px] justify-center">
        <div className="flex mb-2 gap-4">
          <div>
            <time className="text-[12px] text-gray-400">{publishDate}</time>
          </div>
          <div>
            <time className="text-[12px] text-gray-400">• {author}</time>
          </div>
        </div>
        <h2 className="font-semibold font-neueMachina text-xl">{title}</h2>
        <h4 className="font-neueMachina mt-2 overflow-wrap: break-words line-clamp-6">
          {description}
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
