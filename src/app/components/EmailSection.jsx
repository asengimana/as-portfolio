"use client";
import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const EmailSection = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);

          setMessageSent(true);
          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Un projet de création web ?
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Si vous souhaitez discuter d&apos;un projet ou si vous avez simplement
          une question, veuillez remplir le formulaire ci-dessous.
        </p>
        <div className="socials flex flex-row gap-2">
          <Tippy content="GitHub">
            <Link href="https://github.com/asengimana" target="_blank">
              <AiFillGithub
                size={48}
                className="text-primary-500 hover:text-secondary-500"
              />
            </Link>
          </Tippy>
          <Tippy content="Linkedin">
            <Link
              href="https://www.linkedin.com/in/asengimana/"
              target="_blank"
            >
              <AiFillLinkedin
                size={48}
                className="text-primary-500 hover:text-secondary-500"
              />
            </Link>
          </Tippy>
          <Tippy content="Twitter">
            <Link href="https://twitter.com/match4d" target="_blank">
              <AiFillTwitterCircle
                size={48}
                className="text-primary-500 hover:text-secondary-500"
              />
            </Link>
          </Tippy>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="user_name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Nom
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="user_email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johndoe@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Votre message..."
              required
            />
          </div>
          {!messageSent ? (
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Envoyer
            </button>
          ) : (
            <button
              type="submit"
              className="bg-secondary-800 hover:bg-secondary-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Message envoyé avec succès !
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
