"use client";

import { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";

export default function GuestCount({text}:{text:any}) {
  const [guestCount, setguestCount] = useState(0);

  const handleAddGuest = () => {
    setguestCount((a) => a + 1);
  };

  const handleSubtractGuest = () => {
    setguestCount((a) => a - 1);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <div className=" hover:rounded-3xl hover:bg-[#DDDD] xs:px-2 sm:p-2 flex  items-center  justify-center sm:gap-10 lg:gap-20 sm:px-10 hover:border-none transition-all 0.3s ease-in">
            <div className="flex sm:flex-col">
              <h1>{text}</h1>
            
           <p> {guestCount? guestCount + " Guest":""}</p>
             
            </div>
            <div className="bg-red-500 text-white rounded-full p-2 xs:hidden sm:block">
              
                <HiOutlineSearch className="text-[24px] xs:hidden sm:inline-block" />
             
            </div>
          </div>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Select Guest</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem className="flex justify-between items-center gap-x-12 p-8">
          <div>
            {" "}
            <h1 className="text-xl">Adult</h1>
            <p className="text-gray-400">Age 13 or above</p>
          </div>
          <div className="flex gap-x-2 justify-center items-center">
            <button className=" px-2  bg-gray-100 text-xl rounded-full" onClick={handleSubtractGuest}>
              -
            </button>

           
            <button className=" px-2  bg-gray-100 text-xl rounded-full" onClick={handleAddGuest}>
              +
            </button>
          </div>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem className="flex justify-between items-center gap-x-12 p-8">
          <div>
            {" "}
            <h1 className="text-xl">Children</h1>
            <p className="text-gray-400">Age 2-12</p>
          </div>
          <div className="flex gap-x-2 justify-center items-center">
            <button className=" px-2  bg-gray-100 text-xl rounded-full" onClick={handleSubtractGuest}>
              -
            </button>

           
            <button className=" px-2  bg-gray-100 text-xl rounded-full" onClick={handleAddGuest}>
              +
            </button>
          </div>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem className="flex justify-between items-center gap-x-12 p-8">
          <div>
            {" "}
            <h1 className="text-xl">Infants</h1>
            <p className="text-gray-400">Under 2</p>
          </div>
          <div className="flex gap-x-2 justify-center items-center">
            <button className=" px-2  bg-gray-100 text-xl rounded-full" onClick={handleSubtractGuest}>
              -
            </button>

           
            <button className=" px-2  bg-gray-100 text-xl rounded-full" onClick={handleAddGuest}>
              +
            </button>
          </div>
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem className="flex justify-between items-center gap-x-12 p-8">
          <div>
            {" "}
            <h1 className="text-xl">Pets</h1>
            <Link href={"/pets"} className="text-gray-400 underline">
              Bringing a service animal?
            </Link>
          </div>
          <div className="flex gap-x-2 justify-center items-center">
            <button className=" px-2  bg-gray-100 text-xl rounded-full" onClick={handleSubtractGuest}>
              -
            </button>

           
            <button className=" px-2  bg-gray-100 text-xl rounded-full" onClick={handleAddGuest}>
              +
            </button>
          </div>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
