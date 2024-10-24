import * as React from "react";
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

interface Countries {
  name: string;
  text: string;
  image: string;
}

const countries: Countries[] = [
  {
    name: "Lahore , Pakistan",
    text: "guest interested in Islamabad also looked here",
    image: "/images/karachi.png",
  },
  {
    name: "Islamabad , Pakistan",
    text: "guest interested in Islamabad also looked here",
    image: "/images/delhi.png",
  },
  {
    name: "Karachi , Pakistan",
    text: "guest interested in Islamabad also looked here",
    image: "/images/turkiye.png",
  },
  {
    name: "Delhi , India",
    text: "guest interested in Islamabad also looked here",
    image: "/images/delhi.png",
  },
  {
    name: "Istanbul , Turkiye",
    text: "guest interested in Islamabad also looked here",
    image: "/images/karachi.png",
  },

 
];

type Checked = DropdownMenuCheckboxItemProps["checked"];

export default function Drop() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="text-gray-500" >

      <p className="xs:hidden sm:block sm:text-[9px]">Enter Your Destination</p>  
       
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Suggested Destination</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {countries.map((item , index) => (
          <DropdownMenuCheckboxItem key={index}>
            <div className="flex gap-3  py-3">
              <Image src={item.image} alt="image" width={60} height={60} />
              <div className="flex flex-col">
              <h1>{item.name}</h1>
              <p className="text-gray-400">{item.text}</p>
              </div>
           
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
