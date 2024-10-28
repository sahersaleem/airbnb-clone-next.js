import Link from "next/link";
import React from "react";
import Wrapper from "./Wrapper";
import { CiGlobe } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#F7F7F7] mt-28 font-sans pb-9 overflow-x-hidden lg:px-10">
        <Wrapper>
        <div className="flex p-7 xs:gap-y-12 lg:gap-60 lg:items-center text-[14px] justify-center xs:flex-col lg:flex-row">
      <div className="flex flex-col space-y-3">
        <h1 className="font-bold">Support</h1>
        <Link href={"/"} className="hover:underline">Help-center</Link>
        <Link href={"/"} className="hover:underline">AirCover</Link>
        <Link href={"/"} className="hover:underline">Anti-discrimination</Link>
        <Link href={"/"} className="hover:underline">Anti-discrimination</Link>
        <Link href={"/"} className="hover:underline">Cancellation options</Link>
        <Link href={"/"} className="hover:underline">Report neighborhood concern</Link>
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="font-bold">Hosting</h1>
        <Link href={"/"} className="hover:underline">Airbnb Your Home</Link>
        <Link href={"/"} className="hover:underline">AirCover for Hosts</Link>
        <Link href={"/"} className="hover:underline">Hosting Recreation</Link>
        <Link href={"/"} className="hover:underline">Community forum</Link>
        <Link href={"/"} className="hover:underline">Hosting responsibly</Link>
        <Link href={"/"} className="hover:underline">Air friendly Apartments</Link>
        <Link href={"/"} className="hover:underline">Join a free hosting class</Link>
        <Link href={"/"} className="hover:underline">Find a co-host</Link>
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="font-bold">Airbnb</h1>
        <Link href={"/"} className="hover:underline">Help-center</Link>
        <Link href={"/"} className="hover:underline">News-room</Link>
        <Link href={"/"} className="hover:underline">New features</Link>
        <Link href={"/"} className="hover:underline">Careers</Link>
        <Link href={"/"} className="hover:underline">Gift cards</Link>
        <Link href={"/"} className="hover:underline">Report neighborhood concern</Link>
      </div>
      </div>
      <hr/>
      <div className="mt-4 flex justify-between xs:items-center xs:flex-col sm:flex-row ">

    <h1 className=" xs:text-[9px] sm:text-[12px]"> © 2024 Airbnb, Inc.TermsSitemap Privacy Your Privacy Choices</h1> 
    <div className="flex justify-center items-center gap-2">
       <Link href={"/"}> $ English US</Link>
       <Link href={"/"}><CiGlobe/></Link>
       <Link href={"/"}><FaFacebook/></Link>
       <Link href={"/"}><FaInstagramSquare/></Link>
       <Link href={"/"}><FaTwitter/></Link>
       

    </div>
      </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
