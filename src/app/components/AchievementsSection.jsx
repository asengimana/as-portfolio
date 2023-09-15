"use client";
import React from "react";
import dynamic from "next/dynamic";
import skills from "../data/skills";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  return (
    <div className="py-8 sm:px-4 xl:gap-16 sm:py-16 xl:px-16 ">
      <div className="sm:border-[#33353F] sm:border rounded-md sm:py-8 sm:px-16 flex flex-row items-center sm:justify-between flex-wrap">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center mx-4 my-4 sm:my-0 flex-1 flex-grow-0 flex-shrink-0 w-1/4 sm:mb-2"
            >
              <Image
                src={`/${skill.image}`}
                alt={skill.name}
                width={50}
                height={50}
              />

              <p className="text-[#ADB7BE] text-base mt-1">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
