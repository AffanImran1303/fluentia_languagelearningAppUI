import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FlipWords } from "./ui/flip-words";

const HeroSection = () => {
  const words = ["Gateway", "Path", "Portal", "Bridge"];
  return (
    <div
  id="home"
  className="h-[32rem] w-full md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 p-40 mt-24"
>
  <div className="grid grid-rows-3 gap-y-2 w-full">
    <div className="">
    <h1 className="text-3xl poppins-extrabold text-center md:text-6xl md:text-left">
      Your <FlipWords words={words} /> <br /> to Fluency and Beyond
    </h1>
    </div>
    <div className="place-self-center pr-[480px]">
    <p className="text-sm md:text-xl text-center md:text-left">
      Fluentia simplifies language learning by its engaging courses, and
      24/7 access. Start today and see the difference
    </p>
    </div>
    <div className="">
    <Link href="/" className="md:justify-start">
      <Button
        type={"button"}
        title="Explore Courses"
        icon="/images/icons/book-icon.png"
      ></Button>
    </Link>
    </div>
    {/* <h1 className="text-3xl poppins-extrabold text-center md:text-6xl md:text-left">
      Your <FlipWords words={words} /> <br /> to Fluency and Beyond
    </h1>
    <p className="text-sm md:text-xl text-center md:text-left">
      Fluentia simplifies language learning by its engaging courses, and
      24/7 access. Start today and see the difference
    </p> */}
  </div>
</div>
  );
};

export default HeroSection;
