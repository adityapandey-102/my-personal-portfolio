"use client"
// 1️⃣ Home Page (Landing Page)
// 📌 Hero Section (Company Intro)
// 🔹 Company Name (E.g., "Aditya Pandey Tech Solutions" or just "Aditya Pandey")
// 🔹 Tagline (E.g., "Innovating the Future with Tech & AI")
// 🔹 Brief Introduction (What this website is about—tech, software, AI, personal branding)
// 🔹 CTA (Call to Action) → "Explore My Work" | "Read My Blog" | "Hire Me"

// 📌 Services Overview (What I Offer) 🔹 Web Development (MERN, Next.js, AI-integrated solutions)
// 🔹 AI & Automation Consulting
// 🔹 Tech & Finance Blog
// 🔹 Open Source Contributions

// 📌 Why Choose Me? (Value Proposition) 🔹 Proven Experience in Web & AI
// 🔹 Scalable, Performance-Optimized Development
// 🔹 Hands-on with Latest Technologies

// 📌 Featured Projects (Top 3-4 best works)
// 📌 Blog Highlights (Recent articles)
// 📌 Testimonials / Achievements (Optional)
// 📌 CTA (Hire Me | Contact Me | Learn More)

import React from 'react'
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Typewriter = dynamic(() => import("react-simple-typewriter").then(mod => mod.Typewriter || mod), { ssr: false });
// import { Typewriter } from 'react-simple-typewriter'
import * as animation1 from '@/public/lottieeJSON/anim1.json';
import Image from 'next/image';
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
    IconBrandLinkedin
} from "@tabler/icons-react";
import Link from 'next/link';



function HeroSection() {
    const styleLottie2 = {
        height: "100%",
        width: "100%",
        backgroundSize: "cover"
    }

    const animation1DataClone = JSON.parse(JSON.stringify(animation1));

    const links = [
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Products",
            icon: (
                <Image src="/picture/leetcode.svg"
                alt="Profile"
                width={30} // Adjust width
                height={30}
                 className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Components",
            icon: (
                <IconNewSection className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "#",
        },
       
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-black dark:text-neutral-300" />
            ),
            href: "#",
        },

        
    ];


    const companyTagline = [" a Fullstack Developer.", "a Frontend Engineer.", "A.I Learner.", " a PolyMaths."]
    return (
        <>
            <div id='page1' className="w-full --md:h-[100vh] text-center mt-10 bg-[#010228] pb-1 pt-20">
                <section className='flex  justify-between px-[4%] md:px-[10%]  flex-col md:flex-row'>
                    <div className="text-slate-200  ">
                        <div className="w-full md:w-[670px] h-[120px]  md:h-[220px] space-y-3 text-xl md:text-5xl --md:text-5xl font-mono font-medium text-left">
                            <p>Hey 👋I'm</p>
                            <p> Aditya Pandey 👨🏻&zwj;💻</p>
                            <Typewriter
                                words={companyTagline}
                                loop={0} // Set to 0 for infinite loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />

                        </div>
                        <div className="md:w-[700px]-- text-sm md:text-xl font-mono font-medium text-left mt-5 mb-5">
                            <h2>Innovate. Build. Scale.</h2>
                        </div>
                    </div>
                    <div className='flex items-center  justify-center'>
                        <div width={250} // Adjust width
                            height={250} className=' w-[150px] h-[150px] md:w-[250px] md:h-[250px] text-5xl font-bold rounded-full font-mono absolute z-40 overflow-hidden shadow-2xl shadow-slate-800 '><Image
                                src="/picture/developer.jpg" // Replace with your image path
                                alt="Profile"
                                width={250} // Adjust width
                                height={250} // Adjust height
                                className=""
                            /></div>
                        <Lottie animationData={animation1DataClone} style={styleLottie2} />

                    </div>

                </section>

                <section className="--md:w-[600px] pl-[10%]">
                    <div className='flex  flex-col-- md:flex-row flex-wrap space-x-5 space-y-2'>
                        {links.map((link)=>{

                            return (
                            <Link key={link.title} href={link.href} alt={link.title}  className='btn_shadow h-[60px] w-[60px] p-3 --border-2 bg-slate-200 hover:bg-[#D2F220] '>{link.icon}</Link>)
                        })}

                    </div>
                </section>
            </div>
        </>
    )
}

export default HeroSection