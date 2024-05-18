import BlogCard from "@/components/Card/BlogCard";
import { getAllPostsMeta } from "@/lib/mdx";
import Link from "next/link";

const Page = async () => {
  const posts = await getAllPostsMeta();

  const sortedPosts = posts
    ?.filter((post) => post.publish === true)
    .sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));

  return (
    <section className="py-24 h-screen px-[96px] ">
      <div className="container">
        <h1>All Posts</h1>
        <div className="flex flex-wrap  mt-6 ">
          {sortedPosts.map((post) => (
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
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
