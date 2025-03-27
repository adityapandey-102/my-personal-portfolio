"use client"
import Link from 'next/link'
import React from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  IconMenu2
} from "@tabler/icons-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Navbar() {
  const linkStyle = `relative --hover:font-bold font-semibold 
            before:content-[''] before:absolute before:left-0 before:bottom-0 
            before:w-0 before:h-[2px] before:bg-[#D2F220] 
            before:transition-all before:duration-300 before:ease-in-out 
            hover:before:w-full border-b-2 md:border-0 pb-2`
  return (

    <>
      <div className="text-[#D2F220] sm:text-xl md:text-4xl font-semibold flex font  justify-between items-center --font-bold font-mono --rounded-2xl  py-6 px-5 md:px-44 AppGlassK fixed top-0 z-50 bg-[#D2F220] opacity-90 ">
        <Link className='flex' href={"/"}><h1>ADIDEVSPACE</h1></Link>
        <div className='space-x-5 text-xl hidden  md:flex '>
          <Link className={linkStyle} href={"#"}>ABOUT ME</Link>
          <Link className={linkStyle} href={"#"}>SKILLS</Link>
          {/* <Link href={"#"}>Projects</Link> */}
          <Link className={linkStyle} href={"#"}>PROJECTS</Link>
          <Link className={linkStyle} href={"#"}>CONTACT</Link>
          {/* <Link href={"#"}>Open Source & GSoC Section</Link> */}
        </div>
        <Sheet>
          <SheetTrigger asChild>
              <IconMenu2 className="h-[30px] w-[30px] text-[#D2F220] dark:text-neutral-300 inline md:hidden" />
          </SheetTrigger>
          <SheetContent className="AppGlassN text-slate-300">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              {/* <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription> */}
            </SheetHeader>
            <div className='text-lg flex flex-col px-5 py-3 space-y-2  '>
              <Link className={linkStyle} href={"#"}>ABOUT ME</Link>
              <Link className={linkStyle} href={"#"}>SKILLS</Link>
              {/* <Link href={"#"}>Projects</Link> */}
              <Link className={linkStyle} href={"#"}>PROJECTS</Link>
              <Link className={linkStyle} href={"#"}>CONTACT</Link>
              {/* <Link href={"#"}>Open Source & GSoC Section</Link> */}
            </div>
            <SheetFooter>
              end
            </SheetFooter>
          </SheetContent>
        </Sheet>



      </div>
    </>
  )
}

export default Navbar