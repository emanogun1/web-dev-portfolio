'use client';

import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import techDeskImage from "../../public/tech-desk.jpg"
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import React, { useState } from "react";
import { useClient } from 'next/client'


export default function Home() {
  
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ""}>
      <main className="bg-white px-10 md:px-20 lg:px40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">developed by john doe</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2x1"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from bg-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  My CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium  md:text-6xl">
              John Doe
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Just A Certified Web Developer Showing You My Work 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <AiFillYoutube />
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md-95 md:w-96">
            <Image src={techDeskImage} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="">
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Add info here
              <span className="text-teal-500">Agencies</span>
              Consulted for <span className="text-teal-500">startups</span>
              collaborated with talented people.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a wide range of services
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">
                Providing expert advice and solutions for your business needs.
              </p>
              <h4 className="py-4 text-teal-600">My Coding Stack</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Development</h3>
              <p className="py-2">
                Crafting robust and scalable web applications tailored to your needs.
              </p>
              <h4 className="py-4 text-teal-600">My Coding Stack</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Design</h3>
              <p className="py-2">
                Creating visually stunning designs to enhance user experiences.
              </p>
              <h4 className="py-4 text-teal-600">Tools I Use</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
              <p className="text-gray-800 py-1">Sketch</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3x1 py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Add info here
              <span className="text-teal-500">Agencies</span>
              Consulted for <span className="text-teal-500">startups</span>
              collaborated with talented people.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a wide range of services
            </p>      
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flew-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>      
  );
};

