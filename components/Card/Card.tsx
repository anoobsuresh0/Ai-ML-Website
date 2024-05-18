import React from "react";

interface CardProps {
  id: string;
  title: string;
  description: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ id, title, description }) => {
  const colors = ["#5A5A5A", "#101010", "#01523B", "#01B582"];

  const colorIndex = parseInt(id) % colors.length;
  const color = colors[colorIndex];

  return (
    <>
      <div
        className="w-[300px] h-[250px] rounded-2xl my-10 p-4"
        style={{
          backgroundColor: color,
          // marginLeft:"-100px"
        }}
      >
        <h2 className="font-sulphurPoint text-[36px]">{id}</h2>
        <h3 className="font-sulphurPoint mb-4">{title}</h3>
        <h4 className="font-neueMachina overflow-wrap: break-words line-clamp-3  ">{description}</h4>
      </div>
    </>
  );
};

export default Card;
