import React, { useState } from "react";
import { teamMembers } from "./data";

import { TypeAnimation } from "react-type-animation";
import Foto from "./image/fotoku1.jpg";
import cvFile from "./image/CV Indra Ridho Rizkian Pratama.pdf";

import { data } from './data';

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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    // Ganti dengan nomor WhatsApp tujuan
    const phoneNumber = "6282131211769";

    // Membuat URL deep link ke WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    // Buka URL deep link untuk mengirim pesan via WhatsApp
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white">

      <div className="lg:px-20 px-2 bg-white">
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
          <TypeAnimation className="text-gray-900"
            sequence={[
              " Indra",
              500,
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

        <p className="max-w-lg mt-6 text-gray-500">
          A high school student majoring in Software Engineering who is able to
          build static and dynamic web sites using React JS and Node JS.
          Experienced in programming, economics and business, with strong
          leadership skills.
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
            className="btn-4 font-normal w-full lg:w-40 lg:ml-5"
            data-tooltip="Size: 747Kb"
          >
            <div className="button-wrapper">
              <div className="text">Download CV</div>
              <span className="icon">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
    <h1 className="text-2xl font-bold text-center capitalize lg:text-3xl text-gray-900">
      Skill
    </h1>
    <p className="max-w-2xl font-semibold mx-auto my-4 text-center text-gray-900">
      These are some of my programming skills. Apart from that, I also
      master the fields of Business/Economics and Project Manager.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mt-8 xl:mt-12">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-slate-300 flex flex-col items-center p-4 sm:p-5 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300 transform cursor-pointer group"
        >
          <img
            className="object-cover w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28"
            src={member.image}
            alt={member.name}
          />
          <h1 className="mt-2 text-sm font-semibold text-gray-900 capitalize group-hover:text-white">
            {member.name}
          </h1>
          <a
            href={member.url}
            className="mt-1 text-center text-xs text-gray-800 capitalize hover:underline group-hover:text-gray-300"
          >
            {member.desc}
          </a>
        </div>
      ))}
    </div>
  </div>
</section>



{/* PORTOFOLIO */}
<section id="portofolio-section" className="bg-white">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-bold text-center text-gray-950 capitalize lg:text-3xl">
      Achievment
    </h1>

    <p className="mt-4 text-center text-gray-500">
      Several achievements and certifications in the field of programming and business planning
    </p>

    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
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
  <h1 className="text-2xl font-bold text-center text-gray-950 capitalize lg:text-3xl">
    CERTIFICATE
  </h1>

  <p className="mt-3 text-center text-gray-500">
    Several competition and bootcamp certificates in programming and business planning
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
            alt="Certificate 5"
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
            alt="Certificate 6"
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
            alt="Certificate 7"
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



{/* PROJECT SECTION */}
<section id="project-section" className="bg-white">
  <div className="container px-6 py-10 mx-auto">
    <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-3xl">
      Project
    </h1>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:gap-4 lg:grid-cols-3">
      {data.map((data, index) => (
        <div
          key={index}
          className="flex items-end bg-gray-200 overflow-hidden bg-cover rounded-lg h-72"
          style={{
            backgroundImage: `url('${data.background}')`,
          }}
        >
          <div className="w-full px-2 text-center py-4 overflow-hidden rounded-b-lg backdrop-blur-lg bg-white/60">
            <a href={data.url}>
              <h2 className="mt-1 mb-1 text-md font-semibold text-gray-800 capitalize">
                {data.title}
              </h2>
            </a>
            <div className="flex justify-center space-x-4 mb-2">
              <img src={data.icon1} alt="Icon 1" className="w-6 h-6" />
              <img src={data.icon2} alt="Icon 2" className="w-6 h-6" />
              <img src={data.icon3} alt="Icon 3" className="w-6 h-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





        {/* CONTACT */}
        <section id="contact-section" class="bg-white ">
          <div class="container px-12 pb-12 pt-5 rounded-2xl mb-12 mx-auto bg-gray-700">
            <div class="lg:flex lg:items-center lg:-mx-6">
              <div class="lg:w-1/2 lg:mx-6">
                <h1 class="text-xl font-semibold text-white lg:text-3xl">
                  Contact us for more info
                </h1>

                <div class="mt-3 space-y-8 md:mt-3">
                  <p class="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 mx-2 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span class="mx-2 text-gray-200">
                      Jalan Danau Ranau, Sawojajar, Kecamatan Kedungkandang,
                      Kota Malang, Jawa Timur 65139, Indonesia
                    </span>
                  </p>

                  <p class="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-2 text-blue-500 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span class="mx-2 text-gray-200">+62-821-3121-1769</span>
                  </p>

                  <p class="flex items-start -mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 mx-2 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="mx-2 text-gray-200">
                      indraridho08@gmail.com
                    </span>
                  </p>
                </div>

                <div class="mt-6 w-80 md:mt-8">
                  <h3 class="text-gray-200 ">Follow us</h3>

                  <div class="flex mt-4 -mx-1.5 ">
                    <a
                      href="https://github.com/IndraRP"
                      className="mx-2"
                      aria-label="Github"
                    >
                      <svg
                        class="h-8 w-8  text-gray-200 transition-colors duration-300 transform hover:text-blue-500"
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

                    {/* LINKEDIN */}
                    <a
                      class="mx-1.5 text-gray-200 transition-colors duration-300 transform hover:text-blue-500"
                      href="https://www.linkedin.com/in/indra-ridho-rizkian-pratama-87aa14298/"
                    >
                      <svg
                        class="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                          fill="currentColor"
                        />
                        <path
                          d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                          fill="currentColor"
                        />
                        <path
                          d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>

                    {/* Whatsapp */}
                    <a
                      href="https://wa.me/6289608322921"
                      className="mx-2"
                      aria-label="WA"
                    >
                      <svg
                        class="h-7 w-7 text-gray-200 transition-colors duration-300 transform hover:text-blue-500"
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

                    {/* INSTAGRAM */}
                    <a
                      class="mx-1.5  text-gray-200 transition-colors duration-300 transform hover:text-blue-500"
                      href="https://www.instagram.com/indra.rrpratama/"
                    >
                      <svg
                        class="w-8 h-8"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="mt-8 lg:w-1/2 lg:mx-6">
                <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">
                  <h1 class="text-lg font-medium text-gray-700">
                    What do you want to ask
                  </h1>

                  <form onSubmit={sendToWhatsApp} className="mt-6">
                    <div className="flex-1">
                      <label className="block mb-2 text-sm text-gray-600 ">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <label className="block mb-2 text-sm text-gray-600">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="johndoe@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>

                    <div className="w-full mt-6">
                      <label className="block mb-2 text-sm text-gray-600">
                        Message
                      </label>
                      <textarea
                        className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Send via WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
