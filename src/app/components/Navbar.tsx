"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Wrapper from "./Wrapper";
import Image from "next/image";
import logo from "./../../.././public/images/logo.webp";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { LiaBarsSolid } from "react-icons/lia";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import Drop from "./Drop"
import GuestCount from "./GuestCount"
import { CalendarForm } from "./Calender";
const Navbar = () => {


return (
    <div className="bg-white p-6 text-black font-sans border pb-8 ">
      <Wrapper>
        <div className="flex justify-between items-center xs:flex-col sm:flex-row xs:gap-y-2 sm:gap-y-0">
          <div>
            <Image src={logo} alt="logo" className="w-[90px] h-auto" />
          </div>

          <div className="text-black flex justify-center item center flex-col ml-10 ">
            <div className="flex gap-x-7 justify-center items-center">
              <Link
                href={"/home"}
                className=" text-gray-400 visited:text-black  xs:text-[14px] sm:text-[16px]  transition-all 0.3s ease-in "
              >
                Stays
              </Link>
              <Link
                href={"/experiences"}
                className=" text-gray-400 visited:text-black  xs:text-[14px]  sm:text-[16px] hover:bg-[#DDDD] hover:text-black rounded-2xl p-2 transition-all 0.3s ease-in "
              >
                Experiences
              </Link>
            </div>
          </div>
          <div className=" flex-col xs:hidden sm:flex">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-2 items-center">
                <Link
                  href={"/home"}
                  className=" text-gray-400 visited:text-black  text-[16px] hover:bg-[#DDDD] hover:text-black rounded-2xl p-2  transition-all 0.3s ease-in"
                >
                  Airbnb your home
                </Link>
              </div>
              <div className="hover:bg-gray-200 p-2 rounded-2xl">
                <CiGlobe className="text-lg font-bold  transition-all 0.3s ease-in" />
              </div>
              
            </div>
          </div>
        </div>
        <div className=" text-[13px] flex justify-center items-center  mt-7 ">
          <div className="flex  justify-center  items-center xs:w-[300px] sm:w-auto sm:mr-30 rounded-full box">
            <div className=" hover:rounded-3xl hover:bg-[#DDDD] p-2 flex flex-col  justify-start items-start border-r border-gray-500 xs:px-2 lg:px-16   hover:border-none transition-all 0.3s ease-in xs:items-center">
              <h1>Where</h1>
               <Drop/>
           
            </div>

            <div className=" hover:rounded-3xl hover:bg-[#DDDD]  sm:p-2 flex flex-col justify-center items-center border-r border-gray-500 xs:px-2 lg:px-10 hover:border-none transition-all 0.3s ease-in ">
              <h1>Checkin</h1>
              <CalendarForm/>
            </div>

            <div className=" hover:rounded-3xl hover:bg-[#DDDD] p-2 flex flex-col justify-center items-center border-r border-gray-500 xs:px-2 lg:px-10  hover:border-none transition-all 0.3s ease-in">
              <h1>CheckOut</h1>
              <div>
           <CalendarForm/>
           </div>
            </div>
           
            <GuestCount text={"who"}/>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
