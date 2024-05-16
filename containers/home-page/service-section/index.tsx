"use client"
import React, { useEffect, useState } from "react";
// import Draggable from "react-draggable";



const ServiceSection = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationCompleted(true);
    }, 500); 

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-start h-screen">
      <h1 className="font-neueMachina mb-[200px]">SERVICES</h1>

      <div className="flex w-full justify-start items-center h-auto relative">
        {/* Draggable Elements with Falling Animation */}
        {/* {animationCompleted && (
          <Draggable bounds="parent">
            <div className="interactive-text font-neueMachina text-3xl border border-gray-500 p-4 animation-falling">
              predictive
            </div>
          </Draggable>
        )}
        {animationCompleted && (
          <Draggable bounds="parent">
            <div className="interactive-text font-neueMachina text-3xl border border-gray-500 p-4 animation-falling">
              Deep learning
            </div>
          </Draggable>
        )}
        {animationCompleted && (
          <Draggable bounds="parent">
            <div className="interactive-text font-neueMachina text-3xl border border-gray-500 p-4 animation-falling">
              Neural network
            </div>
          </Draggable>
        )} */}

        {/* List */}
        <ul className="font-neueMachina text-[50px] list-disc ml-4">
          <li className="service_li" >MACHINE LEARNING</li>
          <li className="service_li">DETECTION & TAGGING</li>
          <li className="service_li">COMPUTER VISION</li>
          <li className="service_li">AI VISION MODELLING</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceSection;
