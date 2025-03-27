"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AboutMe() {
    return (
        <>
            <section className='flex w-full flex-col mb-20 mt-16'>
                <h1 className='text-4xl font-semibold text-center text-[#D2F220]'> ABOUT ME</h1>
                <div className='flex w-full flex-col md:flex-row  items-center justify-between px-[4%] md:px-[10%]'>
                    <div width={350} // Adjust width
                        height={350} className='h-[200] w-[200px] md:h-[350px] md:w-[350px] font-bold rounded-full font-mono overflow-hidden shadow-2xl shadow-slate-700 border-black-- --border-[5px] '>
                        <Image
                            src="/picture/Profile_Photo.jpg" // Replace with your image path
                            alt="Profile"
                            width={350} // Adjust width
                            height={350} // Adjust height
                            className=""
                        /></div>
                    <div className=" w-full text-left max-w-3xl p-2 md:p-6">
                        <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
                            🚀 Building Scalable, Intelligent, and Future-Ready Software
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            I am <strong>Aditya Pandey</strong>, a <strong>Full-Stack Developer</strong> passionate about crafting high-performance applications that blend innovation, efficiency, and seamless user experiences. My expertise lies in <strong>React.js, Next.js, Node.js, and scalable architectures</strong>, allowing me to build cutting-edge solutions that push technological boundaries.
                            <br /><br />
                            With a deep understanding of frontend and backend ecosystems, I have successfully migrated applications to Next.js, optimized website performance, and integrated AI-powered solutions. From enhancing UI/UX to automating workflows using OpenAI, I thrive on solving complex challenges with precision and creativity.
                            <br /><br />
                            Beyond coding, I am constantly learning, exploring AI, finance tech, and robotics, and refining my problem-solving skills. My goal is to build intelligent, scalable systems that redefine user experiences and drive impact.
                            <br /><br />
                            🚀 <strong>Eager to bring my skills to your team?</strong> <Link href="#contact" className="text-blue-600 font-semibold hover:underline">Let’s connect</Link> and explore how we can achieve greatness together!
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutMe