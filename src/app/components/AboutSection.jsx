"use client";
import React, { useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.svg" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">À propos</h2>
          <p className="text-base lg:text-lg">
            Je suis un développeur web passionné par la création
            d&apos;expériences interactives et conviviales sur le web. Avec une
            solide base en React.js, HTML, CSS et JavaScript, j&apos;ai
            travaillé sur divers projets qui m&apos;ont permis d&apos;acquérir
            une expérience précieuse dans le domaine. Mon approche consiste à
            concevoir des interfaces utilisateur élégantes et réactives tout en
            m&apos;efforçant de créer des expériences utilisateur
            exceptionnelles. J&apos;aime relever les défis techniques, résoudre
            les problèmes et continuer à développer mes compétences. Mon
            objectif en tant que développeur web est de contribuer de manière
            significative à des projets innovants, d&apos;apprendre en
            permanence et de collaborer avec des équipes passionnées. Je suis
            convaincu que l&apos;apprentissage continu et l&apos;enthousiasme
            sont les clés du succès dans ce domaine en constante évolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
