import React from "react";
import Wrapper from "../components/Wrapper";
import { IoShareOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import img1 from "../../../public/images/img1.png";
import img2 from "../../../public/images/img2.png";
import img3 from "../../../public/images/img3.png";
import img4 from "../../../public/images/img4.png";
import { IoIosStarOutline } from "react-icons/io";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex justify-between mt-6">
          <div>
            <h1 className="text-2xl font-sans font-semibold">
              Ubud Tropical Paradise - Villa Bambu Blue
            </h1>
          </div>
          <div className="flex justify-center items-center gap-5 ">
            {" "}
            <div className="flex justify-center items-center">
              <IoShareOutline />
              <h1 className="">Share</h1>
            </div>
            <div className="flex justify-center items-center">
              <IoMdHeartEmpty />
              <h1 className="">Save</h1>
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-2">
          <div>
            <Image
              src={img1}
              alt="image"
              width={600}
              height={800}
              className="rounded-lg w-[850px] h-auto"
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            {" "}
            <Image
              src={img2}
              alt="image"
              width={200}
              className=" w-[250px] h-[180px]"
            />
            <Image
              src={img3}
              alt="image"
              width={200}
              className=" w-[250px] h-[180px] rounded-lg"
            />
            <Image
              src={img4}
              alt="image"
              width={200}
              className=" w-[250px] h-[180px]"
            />
            <Image
              src={img4}
              alt="image"
              width={200}
              className=" w-[250px] h-[180px] rounded-lg"
            />
          </div>
      
        </div>
        <div className="mt-6">
        <h1 className="text-xl font-sans font-semibold">Entire villa in Ubud, Indonesia</h1>
          <h1>6 guests 3bedrooms  3beds  3baths</h1>
          <div className="flex space-x-3">
          <IoIosStarOutline className="inline-block text-xl mt-[4px]"/><span className="text-xl">4.82</span> 
       <Link href={""} className="underline font-bold text-lg">281 reviews</Link>
          </div>
          </div>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
