import Link from "next/link";

const BlogCard = ({
  id,
  title,
  description,
  publishDate,
}: {
  id: string;
  title: string;
  description: string;
  publishDate: string;
}) => {
  return (
    <div className="bg-lightGreen relative w-[250px] rounded-[20px] h-[250px]">
      <div className="px-6 py-4 ">
        <h2 className="font-semibold text-xl mb-2">{title}</h2>
        <hr />
        <h4 className="font-neueMachina mt-8 overflow-wrap: break-words line-clamp-6  ">
          {description}
        </h4>
      </div>

      <div className="px-6 pt-4 pb-2  absolute bottom-2 left-2  ">
        <time className="text-[12px] text-gray-400">{publishDate}</time>
      </div>
    </div>
  );
};

export default BlogCard;
