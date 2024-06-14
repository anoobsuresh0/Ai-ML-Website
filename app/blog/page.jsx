import BlogCard from "@/components/Card/BlogCard";
import { getAllPostsMeta } from "@/lib/mdx";
import Link from "next/link";

const Page = async () => {
  const posts = await getAllPostsMeta();

  const sortedPosts = posts
    ?.filter((post) => post.publish === true)
    .sort((a, b) => new Date(b.id) - new Date(a.id));

  const postImages = sortedPosts.map((post) => {
    return { ...post, thumbnail: post.thumbnail };
  });

  return (
    <section className="md:py-24 lg:py-24 sm:py-10  h-auto lg:px-24 sm:px-4 ">
      <div className="">
        <div className="flex flex-col justify-center items-center">
          <h1 className=" sm:text-[60px] text-lightGreen ">
            Our Fresh <span className="text-white">News</span>
          </h1>
          <h4 className=" text-lightGray bg text-center sm:text-left">
            Stay informed and inspired with our bite-sized articles
          </h4>
        </div>

        <div className="container flex-wrap mt-6 ">
          {postImages.map((post) => (
            <Link
              href={`blog/${post.slug}`}
              key={post?.slug.title}
              className="rounded-md shadow-md "
            >
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                publishDate={post.publishDate}
                thumbnail={post.thumbnail}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
