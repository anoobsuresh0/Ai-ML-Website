import React from "react";
import RobotPointing from "../../../assets/images/robot_pointing.png";

const BenefitsSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto items-center">
      <div className="w-full md:w-[900px]">
        <h1 className="font-powerGrotesk">
          Explore the Upsides of
          <span className="text-lightGreen"> AI/ML Testing</span>
        </h1>

        <img
          className="sm:w-[200px] md:w-[200px] lg:[200px] ml-[100px] sm:mt-[50px] md:mt-[100px] lg:mt-[100px]"
          src={RobotPointing.src}
          alt="Robot Pointing"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 w-auto p-4">
        <div className="bg-lightGreen p-4 h-[300px] rounded-2xl">
          <h2 className="font-powerGrotesk">
            AI Assurance Testing and Validation:
          </h2>

          <ul className="font-neueMachina">
            <li>
              • Validates accuracy, prevents overfitting, and eliminates bias in
              models
            </li>
            <li>
              • Optimizes hyperparameters for enhanced AI performance through
              validation techniques
            </li>
            <li>
              • Achieves reliable results by ensuring data quality and reducing
              bias
            </li>
          </ul>
        </div>

        <div className="bg-white text-black p-4 h-[300px] rounded-2xl">
          <h2 className="font-powerGrotesk">Bias Mitigation In AI Testing:</h2>

          <ul className="font-neueMachina">
            <li>
              • Carefully analyzes model outputs to detect and address potential
              biases.
            </li>
            <li>
              • Implements strategies to promote fair and unbiased
              decision-making.
            </li>
            <li>
              • Uses diverse data to minimize bias impact and enhance fairness.
            </li>
          </ul>
        </div>

        <div className="bg-darkGray p-4 h-[300px] rounded-2xl">
          <h2 className="font-powerGrotesk">Smooth AI Deployment:</h2>

          <ul className="font-neueMachina">
            <li>
              • Thoroughly tests integration code for seamless AI deployment.
            </li>
            <li>
              • Minimizes potential issues through pre-production testing.
            </li>
            <li>
              • Verifies flawless AI functionality in real-world applications.
            </li>
          </ul>
        </div>

        <div className="bg-darkGreen p-4 h-[300px] rounded-2xl">
          <h2 className="font-powerGrotesk">Achieving Fairness:</h2>

          <ul className="font-neueMachina">
            <li>• Analyzes model outputs to detect and address biases.</li>
            <li>
              • Implements strategies for fair and unbiased decision-making.
            </li>
            <li>
              • Uses diverse data to minimize bias impact and promote fairness.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
