"use client";
import React, { useEffect, useState } from "react";

const ServiceSection = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationCompleted(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col justify-center items-start h-auto mb-[80px] ">
      <h1 className="font-neueMachina sm:mb-[100px] md:mb-[200px] lg:mb-[200px] sm:mt-[50px] sm:text-[50px] md:text-[4rem] lg:text-[4rem]   ">
        SERVICES
      </h1>

      <div className="flex flex-col md:flex-row w-full justify-start items-center h-auto relative">
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
        <ul className="font-neueMachina lg:text-[50px] md:text-[45px] sm:text-[30px] list-disc ml-4">
          <li className="service_li">MACHINE LEARNING</li>
          <li className="service_li">DETECTION & TAGGING</li>
          <li className="service_li">COMPUTER VISION</li>
          <li className="service_li">AI VISION MODELLING</li>
        </ul>
      </div>
    </div>
  );
};

export default ServiceSection;
