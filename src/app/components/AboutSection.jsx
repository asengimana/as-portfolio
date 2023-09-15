"use client";
import React, { useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.svg" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            À propos
          </h2>
          <p className="text-base lg:text-lg about-text">
            Je suis un développeur web junior passionné par la création
            d&apos;expériences interactives. Ma solide base en React.js, HTML,
            CSS et JavaScript est le fruit de divers projets enrichissants. Mon
            approche vise des interfaces élégantes et réactives, cherchant à
            offrir des expériences utilisateur exceptionnelles. Je relève les
            défis techniques avec enthousiasme, constamment avide de
            développement. Mon objectif est de contribuer à des projets
            innovants, d&apos;apprendre en permanence et de collaborer avec des
            équipes passionnées dans ce domaine en constante évolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
