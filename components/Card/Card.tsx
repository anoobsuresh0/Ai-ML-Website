import React from "react";

interface CardProps {
  id: number;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ id, title, description }) => {
  return (
    <>
      <div className="w-[300px] h-[auto] bg-gradient-to-r from-[#01B582] to-[#00A3C4] rounded-2xl my-10 p-4">
        <h2 className="font-sulphurPoint text-[36px]">{id}</h2>

        <h3 className="font-sulphurPoint mb-4">{title}</h3>

        <h4 className="font-neueMachina">{description}</h4>
      </div>
    </>
  );
};

export default Card;
