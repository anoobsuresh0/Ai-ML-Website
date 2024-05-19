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
    <section className="py-24 h-auto px-[96px] ">
      <div className="container">
        <div className=" flex flex-col justify-center items-center">
          <h1>Our Fresh News</h1>
          <h4>Stay informed and inspired with out bite-sized articles</h4>
        </div>

        <div className="flex flex-wrap  mt-6 ">
          {postImages.map((post) => (
            <Link
              href={`blog/${post.slug}`}
              key={post?.slug.title}
              className="p-8 rounded-md shadow-md"
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
