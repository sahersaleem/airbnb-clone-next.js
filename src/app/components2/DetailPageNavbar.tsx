"use client";

import React, { useState } from "react";
import Wrapper from "./../components/Wrapper";
import Image from "next/image";
import logo from "./../../.././public/images/logo.webp";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { LiaBarsSolid } from "react-icons/lia";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { CalendarForm } from "../components/Calender";
import Drop from "../components/Drop";
import GuestCount from "./../components/GuestCount";

const Navbar = () => {
  return (
    <div className="bg-white p-6 text-black font-sans border pb-8">
      <Wrapper>
        <div className="flex xs:flex-col lg:flex-row xs:gap-y-5 lg:gap-y-0 justify-between items-center">
          <div>
            <Image src={logo} alt="logo" className=" xs:w-[60px] lg:w-[90px] h-auto" />
          </div>

          <div className=" text-[13px] flex justify-center items-center  ">
            <div className="flex  justify-center items-center  w-auto  rounded-full box">
              <div className=" hover:rounded-3xl hover:bg-[#DDDD]  xs:p-1 lg:p-2flex flex-col  justify-start items-start border-r border-gray-500 xs:px-4 lg:px-16  hover:border-none transition-all 0.3s ease-in">
                <h1 className="xs:text-[9px] lg:text-[16px]"> Any Where</h1>
              </div>

              <div className=" hover:rounded-3xl hover:bg-[#DDDD]   xs:p-1 sm:p-2 flex flex-col justify-center items-center border-r border-gray-500 xs:px-4 lg:px-16 hover:border-none transition-all 0.3s ease-in">
                <h1 className="xs:text-[9px] lg:text-[16px]">Any week</h1>
              </div>

              <div className=" hover:rounded-3xl hover:bg-[#DDDD]  xs:p-1 sm:p-2 flex  items-center  justify-center gap-8 xs:px-4 sm:px-16hover:border-none transition-all 0.3s ease-in">
                <h1 className="xs:text-[9px] sm:text-[16px]">Who</h1>
                <div>
                  <button className="flex gap-2 bg-red-500 justify-center items-center text-white p-2  rounded-full ">
                    <HiOutlineSearch className="text-[16px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex flex-col xs:hidden ">
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
      </Wrapper>
    </div>
  );
};

export default Navbar;
