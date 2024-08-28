import React, { useState } from "react";

import { TypeAnimation } from "react-type-animation";
import Foto from "./image/fotoku1.jpg";
import cvFile from "./image/CV Indra Ridho R.P.pdf";

import { teamMembers } from "./data";

import Foto1 from "./image/hangtuah.jpg";
import Foto2 from "./image/machung.jpg";
import Foto3 from "./image/storybook.jpg";
import Foto4 from "./image/uwp.JPG";

import Sertif1 from "./image/sertif1.png";
import Sertif2 from "./image/sertif2.png";
import Sertif3 from "./image/sertif3.png";
import Sertif4 from "./image/sertif4.png";
import Sertif5 from "./image/sertif5.png";
import Sertif6 from "./image/sertif6.png";
import Sertif7 from "./image/sertif8.jpg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <a
                href="#home-section "
                className="mx-auto font-extrabold text-lg"
              >
                <h1>Indra</h1>
              </a>
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>


            <div
              className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              }`}
            >
              <div className="-mx-4 lg:flex lg:items-center">
                <a
                  href="#home-section"
                  className="block mx-4 text-gray-700 capitalize dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Home
                </a>
                <a
                  href="#skills-section"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Skills
                </a>
                <a
                  href="#portofolio-section"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Achievment
                </a>

                <a
                  href="#project-section"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                Project
                </a>
              
                <a
                  href="#sertif-section"
                  className="block mx-4 mt-4 text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Sertificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="home-section ">
        <div className="container px-6 py-6 mx-auto ">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-2 w-full h-96 rounded-lg lg:h-[30rem]"
              src={Foto}
              alt="foto1"
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500">“</p>

              <h1 className="text-blue mb-4 text-2xl lg:text-2xl font-extrabold">
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-400">
                  Hello, I'm
                </span>{" "}
                <br></br>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " Indra",
                    500, // wait 1s before replacing "Mice" with "Hamsters"
                    "Fullstack Web Developer",
                    500,
                    "UI UX Designer",
                    500,
                    "Project Manager",
                    500,
                    "Business Analyst",
                    500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />{" "}
              </h1>

              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                A high school student majoring in Software Engineering who is
                able to build static and dynamic web sites using React JS and
                Node JS. Experienced in programming, economics and business,
                with strong leadership skills.
              </p>

              <div className="button block lg:flex pt-4">
                <div className="button1">
                  <button className="px-6 py-3 mt-4 w-full font-normal rounded-full bg-white hover:bg-slate-200 text-black bg-gradient-to-br from-blue-500 via-cyan-500 to-white-500">
                    <a
                      href="#portofolio-section"
                      className="no-underline text-white"
                    >
                      Achievment
                    </a>
                  </button>
                </div>

                <div
                  class=" btn-4 font-normal w-full lg:w-40 lg:ml-5"
                  data-tooltip="Size: 747Kb"
                >
                  <div class="button-wrapper">
                    <div class="text">Download CV</div>
                    <span class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="2em"
                        height="2em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <a
                    href={cvFile}
                    download="CV Indra Ridho R.P.pdf"
                    className="download-link"
                  >
                    {" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills-section" className="relative pb-10 pt-16">
        {/* Section Content */}
        <div className="container px-6 pb-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text- capitalize lg:text-3xl text-gray-900">
            Skill
          </h1>
          <p className="max-w-2xl font-semibold mx-auto my-4 text-center text-gray-900">
            These are some of my programming skills. Apart from that, I also
            master the fields of Business/Economics and Project Manager.
          </p>

          <div className="grid grid-cols-1 gap-5 mt-8 xl:mt-16 lg:grid-cols-4 xl:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-100 flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-lg shadow-md hover:border-transparent group hover:bg-gray-600 dark:border-gray-700 dark:hover:border-transparent"
              >
                <img
                  className="object-cover w-32 h-32"
                  src={member.image}
                  alt={member.name}
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  {member.name}
                </h1>

                <a
                  href={member.url}
                  className="text-blue-400 hover:underline mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300 text-center"
                >
                  {member.desc}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section id="portofolio-section" className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-950 capitalize lg:text-3xl dark:text-white">
            Achievment
          </h1>

          <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            Several achievements and certifications in the field of programming
            and business planning
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: `url(${Foto1})`,
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Juara 3 BusinessPlan Competition 2.0
                </h2>
                <a
                  href="https://drive.google.com/file/d/1zk_cScsFbUZRm0FrY7pAPORKaQvKY-_i/view?usp=sharing"
                  className="text-blue-400 hover:underline"
                >
                  Universitas Hang Tuah
                </a>
              </div>
            </div>

            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: `url(${Foto2})`,
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Juara 3 Entrepeneur Fair 2024
                </h2>
                <a
                  href="https://drive.google.com/file/d/1Yyn07s-7JeOiC3JHZrX0zjbH9BTqdU_f/view?usp=sharing"
                  className="text-blue-400 hover:underline"
                >
                  Universitas Ma Chung
                </a>
              </div>
            </div>

            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: `url(${Foto3})`,
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Bootcamp Front End Developer React and Story Book
                </h2>
                <a
                  href="https://drive.google.com/file/d/1514MjxFCYS31RQg0csYH-SyCjL3NO131/view?usp=sharing"
                  className="text-blue-400 hover:underline"
                >
                  Lanius Machine Vission
                </a>
              </div>
            </div>

            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: `url(${Foto4})`,
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Finalis Business Plan Competition UWP 2024
                </h2>
                <a
                  href="https://drive.google.com/file/d/1Gd41rus3YFSlTif4KJiTg6ay3tSxPGxA/view?usp=sharing"
                  className="text-blue-400 hover:underline"
                >
                  Universitas Wijaya Putra
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}
      <section id="sertif-section" className="bg-white pt-16">
        <h1 className="text-2xl font-bold text-center text-gray-950 capitalize lg:text-3xl dark:text-white">
          CERTIFICATE
        </h1>

        <p className="mt-3 text-center text-gray-500 dark:text-gray-300">
          Several competition and bootcamp certificates in programming and
          business planning
        </p>

        <div className="flex justify-center pb-5 pt-5 lg:pb-10 lg:pt-5">
          <div className="w-full max-w-2xl h-5/6 border border-gray-300 shadow-lg rounded-lg overflow-hidden">
            <div className="carousel relative w-full h-full">
              <div id="slide1" className="carousel-item relative w-full h-full">
                <img
                  src={Sertif1}
                  className="w-full h-full object-cover"
                  alt="Certificate 1"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide2" className="carousel-item relative w-full h-full">
                <img
                  src={Sertif2}
                  className="w-full h-full object-cover"
                  alt="Certificate 2"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide3" className="carousel-item relative w-full h-full">
                <img
                  src={Sertif3}
                  className="w-full h-full object-cover"
                  alt="Certificate 3"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide4" className="carousel-item relative w-full h-full">
                <img
                  src={Sertif4}
                  className="w-full h-full object-cover"
                  alt="Certificate 4"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide5" className="carousel-item relative w-full h-full">
                <img
                  src={Sertif5}
                  className="w-full h-full object-cover"
                  alt="Certificate 4"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide6" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide6" className="carousel-item relative w-full h-full">
                <img
                  src={Sertif6}
                  className="w-full h-full object-cover"
                  alt="Certificate 4"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide5" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide7" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>

              <div id="slide7" className="carousel-item relative w-full h-full">
                <img
                  src={Sertif7}
                  className="w-full h-full object-cover"
                  alt="Certificate 4"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide6" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="project-section" className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Project
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
            <div
                className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')",
                }}
            >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 className="mt-2 mb-2 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                        Component StoryBook NEXT.JS
                    </h2>
                    <p className="mt-2 text-sm tracking-wider text-blue-800">
                    Create UI components using Atomic Design methodology and document them with Storybook, and build with TypeScript.</p>
                </div>
            </div>

            <div
                className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')",
                }}
            >
                  <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 className="mt-2 mb-2 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                    E-commerce franchise (FrontEnd) 
                    </h2>
                    <p className="mt-2 text-sm tracking-wider text-blue-800">
                    Lead the development of an easy-to-use and scalable franchise e-commerce platform built with Vite.js and Bootstrap.</p>
                </div>
            </div>

            <div
                className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                }}
            >
                 <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                    <h2 className="mt-2 mb-2 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                        Personal Website
                    </h2>
                    <p className="mt-2 mb-4 text-sm tracking-wider text-blue-800">
                    Design and develop a personal website profile using React.js, Tailwind CSS and MerakiUI.</p>
                </div>
            </div>
        </div>
    </div>
</section>


      <footer className="bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="flex flex-wrap justify-center mt-1 -mx-4">
              <a
                href="#home-section"
                className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Home{" "}
              </a>

              <a
                href="#skills-section"
                className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                About{" "}
              </a>

              <a
                href="#portofolio-section"
                className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Achievment{" "}
              </a>

              <a
                href="#sertif-section"
                className="mx-4 text-sm text-gray-100 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Reddit"
              >
                {" "}
                Sertificate{" "}
              </a>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-4 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-100 dark:text-gray-300">
              © Copyright 2021. All Rights Reserved.
            </p>

            <div className="flex -mx-2 mt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/indra.rrpratama/"
                className="mx-2"
                aria-label="Instagram"
              >
                <svg
                  class="h-6 w-6 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
                  <circle cx="12" cy="12" r="3" />{" "}
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </a>

              {/* Github */}
              <a
                href="https://github.com/IndraRP"
                className="mx-2"
                aria-label="Github"
              >
                <svg
                  class="h-6 w-6 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" />
                </svg>
              </a>

              {/* Whatsapp */}
              <a
                href="https://wa.me/6282131211769"
                className="mx-2"
                aria-label="WA"
              >
                <svg
                  class="h-6 w-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>

              {/* Email */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
