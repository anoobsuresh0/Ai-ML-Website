import { getAllPostsMeta } from "@/lib/mdx";
import Link from "next/link";

const Page = async () => {
  const posts = await getAllPostsMeta();

  return (
    <section className="py-24 h-screen ">
      <div className="container">
        <h1>All Posts</h1>
        <div className="flex gap-6 mt-6">
          {posts
            ?.filter((post) => post.publish === true)
            .map((post) => (
              <Link
                href={`blog/${post.slug}`}
                key={post?.slug.title}
                className="p-8 rounded-md shadow-md"
              >
                <h3 className="text-xl font-semibold">{post?.title}</h3>
                <p className="mt-4 text-sm">{post?.author}</p>
                <time className="text-[12px] text-gray-400">
                  {post?.publishDate}
                </time>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
