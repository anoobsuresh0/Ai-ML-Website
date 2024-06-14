import { getPostBySlug } from "@/lib/mdx";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

const getPageContent = async (slug) => {
  const { meta, content } = await getPostBySlug(slug);
  return { meta, content };
};

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug);
  return { title: meta.title };
}

const Page = async ({ params }) => {
  const { content } = await getPageContent(params.slug);

  return (
    <section className="py-10 h-[100%]">
      <Link
        href="/blog"
        className="flex  items-center lg:px-[300px] md:px-[300px] sm:px-4 mb-4 "
      >
        <IoMdArrowRoundBack style={{ fontSize: 20, marginRight: 10 }} />
        <h4>Back</h4>
      </Link>

      <div className="container mx-auto px-4 md:px-[300px] lg:px-[300px] text-white justify-center py-4 prose  max-w-none ">
        {content}
      </div>
    </section>
  );
};

export default Page;
