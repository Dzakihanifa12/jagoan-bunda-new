"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-amber-400 to-amber-600 mb-12">
      <div className="container mx-auto px-12 py-36">
        <div className="place-items-center">
          <div className="col-span-7 place-self-center items-center text-center">
            <h1 className="text-black mb-4 text-4xl font-bold font-sans">
              <span className="text-amber-950 mb-4 text 4xl sm:text-5xl lg:text font-bold font-sans">
                Warung Jagoan <br />
              </span>
              <TypeAnimation
                className="mt-5 text-white text-center"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Para Mahasiswa",
                  2000,
                  "Para Remaja",
                  2000,
                  "Para Orang Tua",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
              <span className="mt-15 text-white font-thin text-xl">
                <br />
                Dipercaya mengatasi kelaparan sejak 2019
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
