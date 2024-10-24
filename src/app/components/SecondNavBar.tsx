"use client";

import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { GiAbstract047 } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { GiPalmTree } from "react-icons/gi";
import { MdOutlineBedroomChild } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { FaFireFlameSimple } from "react-icons/fa6";
import { BsUmbrella } from "react-icons/bs";
import { GiCornerFlag } from "react-icons/gi";
import { GiCampingTent } from "react-icons/gi";
import { PiSailboat } from "react-icons/pi";
import { GiBoatFishing } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";
import { TbColorFilter } from "react-icons/tb";
import { Switch } from "@/components/ui/switch";
const SecondNavBar = () => {
  return (
    <div className="text-black bg-white pt-6 flex xs:items-center">
      <Wrapper>
        <div className="flex gap-14">
          <div className="flex gap-8 text-xl  ">
            <Link
              href={"/"}
              className="text-black/60 hover:text-black font-sans transition-all 0.2s ease-linear  flex items-center justify-center flex-col"
            >
              <GiAbstract047 />
              <span className="font-sans text-[14px] hover:border-b border-black">
                Arctic
              </span>
            </Link>
            <Link
              href={"/guest"}
              className="text-black/60 hover:text-black font-sans transition-all 0.2s ease-linear  flex items-center justify-center flex-col"
            >
              <GoHome />
              <span className="font-sans text-[14px] hover:border-b border-black">
                Design
              </span>
            </Link>
            <Link
              href={"/guest"}
              className="text-black/60 hover:text-black font-sans transition-all 0.2s ease-linear  flex items-center justify-center flex-col"
            >
              <GiPalmTree />
              <span className="font-sans text-[14px] hover:border-b border-black">
                Canvas
              </span>
            </Link>
            <Link
              href={"/guest"}
              className="text-black/60 hover:text-black font-sans transition-all 0.2s ease-linear  flex items-center justify-center flex-col"
            >
              <MdOutlineBedroomChild />
              <span className="font-sans text-[14px] hover:border-b border-black">
                Rooms
              </span>
            </Link>
            <Link
              href={"/guest"}
              className="text-black/60 hover:text-black font-sans transition-all 0.2s ease-linear xs:hidden lg:flex items-center justify-center flex-col"
            >
              <MdOutlineFreeBreakfast />
              <span className="font-sans text-[14px] hover:border-b border-black">
                Top Cities
              </span>
            </Link>
            <Link
              href={"/guest"}
              className="text-black/60 hover:text-black font-sans transition-all 0.2s ease-linear  xs:hidden lg:flex items-center justify-center flex-col"
            >
              <FaFireFlameSimple />
              <span className="font-sans text-[14px] hover:border-b border-black">
                Trending
              </span>
            </Link>
            <Link
              href={"/guest"}
              className="text-black/60 hover:text-black font-sans transition-all 0.2s ease-linear xs:hidden lg:flex items-center justify-center flex-col"
            >
              <BsUmbrella />
              <span className="font-sans text-[14px] hover:border-b border-black">
                tropical
              </span>
            </Link>
            <Link
              href={"/guest"}
              className="text-black/60 hover:text-black font-sans transition-all 0.2s ease-linear  xs:hidden sm:flex items-center justify-center flex-col"
            >
              <GiCornerFlag />
              <span className="font-sans text-[14px] hover:border-b border-black">
                Amazing pools
              </span>
            </Link>
            <Link
              href={"/guest"}
              className="text-black/60 hover:text-black font-sans transition-all 0.2s ease-linear  xs:hidden sm:flex items-center justify-center flex-col"
            >
              <GiCampingTent />
              <span className="font-sans text-[14px] hover:border-b border-black">
                Beachfront
              </span>
            </Link>
          </div>
          <div className=" justify-center items-center gap-10 xs:hidden lg:flex">
            <div>
              <button className="flex items-center justify-center  border border-black/50 px-2 py-3 rounded-2xl gap-2 hover:bg-gray-200">
                <TbColorFilter />
                <span>Filter</span>
              </button>
            </div>
            <div className="flex items-center justify-center  border border-black/50 px-2 py-3 rounded-2xl gap-2 hover:bg-gray-200">
              {" "}
              <span className="font-sans text-[14px]">
                Display total before taxes
              </span>{" "}
              <Switch
                id="
          airplane-mode"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SecondNavBar;
