import React from "react";
import Card from "./Card";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  publish: boolean;
  slug: string;
}

interface CardGroupProps {
  blogPosts: BlogPost[];
}

const CardGroup: React.FC<CardGroupProps> = ({ blogPosts }) => {
  const postImages = blogPosts.map((post) => {
    return { ...post };
  });

  return (
    <div className="flex flex-col items-center lg:flex-row  justify-center w-full">
      {postImages
        ?.filter((post) => post.publish === true)
        .map((post) => (
          <Link href={`blog/${post.slug}`}>
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              description={post.description}
            />
          </Link>
        ))}
    </div>
  );
};

export default CardGroup;
