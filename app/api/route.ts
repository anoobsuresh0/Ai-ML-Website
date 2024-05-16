import { getAllPostsMeta } from "@/lib/mdx";

export async function GET() {
  const posts = await getAllPostsMeta();
  return new Response(JSON.stringify(posts));
}
