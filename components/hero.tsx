import React from "react";
import { FlipWords } from "./ui/flip-words";

const Hero = () => {
  const words = ["developer", "designer", "student"];

  return (
    <div className="pb-20 pt-36">
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="md:w-1/2 text-left text-4xl mx-auto font-normal text-neutral-500 dark:text-neutral-600">
          Hi, I'm Jonathan.
          <br />
          I'm a <FlipWords words={words} />
          <p className="mt-4 text-lg text-neutral-600">
            Smaller bio here that allows me to put more detailed information
            about myself. Sort of like a bio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
