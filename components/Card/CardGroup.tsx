import React from "react";
import Card from "./Card";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  publish: boolean;
}

interface CardGroupProps {
  blogPosts: BlogPost[];
}

const CardGroup: React.FC<CardGroupProps> = ({ blogPosts }) => {
  return (
    <div className="flex gap-10 justify-center ">
      {blogPosts
        ?.filter((post) => post.publish === true)
        .map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
    </div>
  );
};

export default CardGroup;
