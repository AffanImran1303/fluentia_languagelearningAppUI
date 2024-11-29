import Link from "next/link";
import React from "react";
import Button from "./Button";
import Image from 'next/image';
import { FlipWords } from "./ui/flip-words";

const HeroSection = () => {
  const words = ["Gateway", "Path", "Portal", "Bridge"];
  return (
    <div
      id="home"
      className="h-max w-full flex justify-center p-8 md:w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto mt-24 py-8 md:py-0 md:mt-56"
    >
      <div className="relative grid grid-rows-3 gap-y-2 w-full">
        <div className="">
          <h1 className="text-4xl poppins-extrabold text-left md:text-6xl">
            Your <FlipWords words={words} /> <br /> to Fluency and Beyond
          </h1>
        </div>
        <div className="place-self-center sm:pr-[320px] lg:pr-[480px]">
          <p className="text-sm text-left md:text-lg lg:text-xl">
            Fluentia simplifies language learning by its engaging courses, and
            24/7 access. Start today and see the difference
          </p>
        </div>
        <div className="h-max">
          <Link href="/" className="justify-start">
            <Button
              type={"button"}
              title="Explore Courses"
              icon="/images/icons/book-icon.png"
            ></Button>
          </Link>
        </div>
        <div className="w-max place-self-center md:place-self-end">
          <Image alt="heroImage" src="/images/12085879_20944363.svg" height={280} width={280}/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
