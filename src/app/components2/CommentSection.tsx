import Image from "next/image";
import React from "react";
import man from "../../../public/images/man.png";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Wrapper from "../components/Wrapper";
const CommentSection = () => {
  return (
    <div className="w-[400px] h-[300px] p-6 box ">
      <div className="flex gap-5  items-center">
        <Image src={man} alt="man" width={60} className="rounded-full object-cover object-center" />
        <div>
          <h1 className="font-sans font-semibold">Oli Redman</h1>
          <p>2 year on Airbnb</p>
        </div>
</div>
        <div className="flex  items-center">
        <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
            <StarFilledIcon />
          <p>
            ...3 weeks ago
          </p>
        </div>

        <div>
          <p className="text-md font-light mt-6">
            We were completely satisfied. An overnight stay at Peter's Air Loft
            is a unique experience and something completely different! We were
            really fascinated by what he built and
          </p>
        </div>
      </div>
  
    
  );
};



const CommentSectionPage = () => {
  return (
    <Wrapper><div className='xs:h-auto xs:pb-10 lg:pb-0 w-full flex  flex-wrap mt-10 gap-10 border-b border-gray-400 xs:items-center xs:justify-center lg:justify-start lg:items-start'>
    <CommentSection/>
    <CommentSection/>
    <CommentSection/>
  </div></Wrapper>
    
  )
}

export default CommentSectionPage

