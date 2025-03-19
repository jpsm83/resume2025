import React from "react";
import Marquee from "react-fast-marquee";

const qualities = [
  "Technical Skills",
  "Organize",
  "Problem Solving",
  "Attention to Details",
  "Versatile",
  "Continuous Learner",
  "Adaptable",
  "Effective Communication",
  "Ethical",
  "Creative",
  "Time Management",
  "Team Player",
  "Critical Thinking",
  "Focus",
];

const Qualities = () => {
  return (
    <div className="w-full bg-gray-900 overflow-hidden h-20 flex items-center">
      <Marquee gradient={false} speed={100} pauseOnHover={false}>
        {qualities.map((quality, index) => (
          <p
            key={index}
            className="whitespace-nowrap font-bold text-white text-xl mx-6"
          >
            {quality}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default Qualities;
