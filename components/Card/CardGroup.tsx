import React from "react";
import Card from "./Card";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface CardGroupProps {
  blogPosts: BlogPost[];
}

const CardGroup: React.FC<CardGroupProps> = ({ blogPosts }) => {
  return (
    <div className="flex gap-10">
      {blogPosts.map((post) => (
        <Card id={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default CardGroup;
