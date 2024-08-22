import React from "react";
import { FlipWords } from "./flip-words";

const Hero = () => {
  const words = ["developer", "designer", "student"];

  return (
    <div className="pb-20 pt-36">
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-500 dark:text-neutral-600">
          Hi, I'm Jonathan.
          <br />
          I'm a <FlipWords words={words} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
