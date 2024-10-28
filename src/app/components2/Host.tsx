import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import man from "./../../../public/images/man.png";
import { Button } from "@/components/ui/button";
import Wrapper from "../components/Wrapper";
const Host = () => {
  return (
    <div className="w-full xs:h-auto lg:h-[80vh] xs:px-5 lg:py-8 xs:py-0 ">
    
      <Wrapper>
      <h1 className="font-sans font-bold text-2xl lg:mb-7 xs:mt-12 lg:mt-10 xs:px-5 lg:px-5">
      Meet Your Host</h1>
        <div className="xs:pt-10 lg:pt-28 flex justify-center flex-col items-center">
         
          <div className="flex justify-center items-center xs:flex-col lg:flex-row xs:space-y-6 lg:space-y-0 lg:space-x-16">
            <Card className="xs:w-[320px] lg:w-[400px] h-auto px-4 py-8 flex justify-between">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={man}
                  alt="man"
                  width={150}
                  className="object-cover object-center rounded-full xs:w-[80px] xs:h-auto lg:w-[150px]"
                />
                <h1 className="text-2xl font-bold font-sans">Peter</h1>
                <h2 className="text-xl font-semibold font-sans">Host</h2>
              </div>
              <div>
                <div className="font-sans px-2 py-3 border-b border-gray-500">
                  <h1 className="text-xl font-bold ">19</h1>
                  <h2 className="text-md font-semibold ">Reviews</h2>
                </div>
                <div className="font-sans px-2 py-3 border-b border-gray-500">
                  <h1 className="text-xl font-bold">5</h1>
                  <h2 className="text-md font-semibold">Rating</h2>
                </div>
                <div className="font-sans px-2 py-3 border-b border-gray-500">
                  <h1 className="text-xl font-bold">1</h1>
                  <h2 className="text-md font-semibold">Year Hosting</h2>
                </div>
              </div>
            </Card>

            <div className="flex flex-col gap-4 lg:my-10">
              <h1 className="text-2xl font-bold">Host Details</h1>
              <div>
                {" "}
                <p>Response rate: 70%</p>
                <p>Responds within a day</p>
              </div>

              <Button>Message Host</Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Host;
