import React from "react";
import Card from "./Card";

interface BlogPost {
  id: number;
  title: string;
  description: string;
}

interface CardGroupProps {
  blogPosts: BlogPost[];
}

const CardGroup: React.FC<CardGroupProps> = ({ blogPosts }) => {
  return (
    <div className="flex gap-10">
      {blogPosts.map((post) => (
        <Card key={post.id} id={post.id} title={post.title} description={post.description} />
      ))}
    </div>
  );
};

export default CardGroup;
