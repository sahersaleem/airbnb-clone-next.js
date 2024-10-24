import React from "react";
import Wrapper from "../components/Wrapper";
import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import room1 from "../../../public/images/room1.png";
import room2 from "../../../public/images/room2.png";
import { CalendarForm } from "../components/Calender";
import GuestCount from "../components/GuestCount";
import { Button } from "@/components/ui/button";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import imageright from "../../../public/images/imageright.png";
import imageleft from "../../../public/images/imageleft.png";
import man from "../../../public/images/man.png";
import { FaTrophy } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineOtherHouses } from "react-icons/md";
import Link from "next/link";
import CommentSection from "./CommentSection";
const ThirdSection = () => {
  return (
    <Wrapper>
      <div className="w-full xs:h-auto lg:h-screen flex xs:flex-col lg:flex-row gap-20 pt-28">
        {/* First div */}
        <div className=" xs:w-[100vw] lg:w-[50vw]  h-auto lg:overflow-auto space-y-16 pb-8 xs:flex lg:block xs:flex-col justify-center items-center">
          <div className="flex border border-gray-500 rounded-lg p-2 lg:gap-8 items-center justify-center xs:flex-col lg:flex-row">
            <div className="flex gap-1 ">
              {" "}
              <Image src={imageright} alt="image" width={40} height={40} />
              <h1 className="text-lg font-sans font-semibold text-center">
                Guest favourite
              </h1>
              <Image src={imageleft} alt="image" width={40} height={40} />
            </div>

            <p className="font-sans text-center xs:text-[12px] text-wrap">
              One Of the most loved homes on Airbnb Acoording to guest
            </p>
            <div className="flex flex-col border-r border-gray-500 px-3 items-center justify-center">
              <p className="text-xl font-bold font-sans">5.0</p>{" "}
              <div className="flex items-center justify-center">
                <StarFilledIcon /> <StarFilledIcon /> <StarFilledIcon />{" "}
                <StarFilledIcon />
              </div>
            </div>
            <h1 className="text-lg font-bold font-sans">147 reviews</h1>
          </div>

          <div className="flex gap-5  border-b border-gray-400 pb-4">
            <Image
              src={man}
              alt="man"
              width={40}
              height={40}
              className="object-center object-cover rounded-full"
            />
            <div>
              <h1 className="font-sans font-bold">Hosted By Milan</h1>
              <p className="text-gray-500">Superhost 2 years hosting</p>
            </div>
          </div>
          <div className="flex gap-5  border-b border-gray-400 pb-4 flex-col">
            <div className="flex space-x-2">
              <FaTrophy className="text-yellow-600 text-xl" />
              <div>
                <h1 className="font-sans font-bold lg:text-lg">Top 5% of homes</h1>
                <p className="text-gray-500">
                  This home is highly ranked based on ratings, reviews, and
                  reliability.
                </p>
              </div>
            </div>

            <div className="flex space-x-2">
              <IoLocationOutline className="text-xl" />
              <div>
                <h1 className="font-sans font-bold lg:text-lg">
                  Unbeatable location
                </h1>
                <p className="text-gray-500">
                  100% of guests in the past year gave this location a 5-star
                  rating.
                </p>
              </div>
            </div>

            <div className="flex space-x-2">
              <MdOutlineOtherHouses className="text-xl" />
              <div>
                <h1 className="font-sans font-bold lg:text-lg">
                  City and garden views
                </h1>
                <p className="text-gray-500">
                  Soak up the views during your stay.
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-2 py-3  bg-[#DDDD] rounded gap-3">
            <p className="font-sans font-medium">
              Some info is shown in its original language.{" "}
            </p>
            <Link href={""} className="underline font-semibold">
              Translate
            </Link>
          </div>
          <div className="border-b border-gray-400 pb-10 ">
            <p className="text-wrap">
              Have you ever thought about getting away from the hustle and
              bustle of São Paulo Imagine doing this while connecting with
              nature Connection & Nature is the perfect environment to
              disconnect from stress and renew your energies. Just 1 hour from
              São Paulo you can enjoy a space connected with nature that
              provides a sense of peace and freedom. We are Petfriendly....
            </p>
            <Button
              className="
          mt-3"
            >
              Show more
            </Button>
          </div>

          <div className=" border-b border-gray-400 pb-10">
            <h1 className="font-sans font-bold text-xl mb-7">
              Where you will sleep
            </h1>
            <div className="flex gap-6">
              <div>
                <Image
                  src={room1}
                  alt="room1"
                  width={400}
                  className="h-[200px] rounded-lg"
                />
                <h1 className="font-semibold font-sans">bedroom</h1>
                <p className="font-light font-sans">1 queen bed</p>
              </div>
              <div>
                <Image
                  src={room2}
                  alt="room2"
                  width={400}
                  className="h-[200px] rounded-lg"
                />
                <h1 className="font-semibold font-sans">living room</h1>
                <p className="font-light font-sans">1 double bed</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-sans font-bold text-3xl">What this place offers</h1>
<div className="flex xs:space-x-10 lg:space-x-56 pt-7">
            <div className="xs:text-[12px] lg:text-lg font- xs:space-y-1 lg:space-y-4">
             <p>Courtyard view</p>
             <p>kitchen</p>
             <p>Courtyard view</p>
             <p>kitchen</p>
             <p>Courtyard view</p>
             <p>kitchen</p>
             

            </div>
            
            <div className="xs:text-[12px] lg:text-lg font- xs:space-y-1 lg:space-y-4">
             <p>Courtyard view</p>
             <p>kitchen</p>
             <p>Courtyard view</p>
             <p>kitchen</p>
             <p>Courtyard view</p>
             <p>kitchen</p>
             

            </div>
            </div>
            <Button className="bg-white hover:bg-[#DDDD] text-black mt-6">Show all amenieties</Button>
          </div>
        </div>

        {/* Second div */}
        <div className="xs:w-full  lg:w-auto xs:flex  xs:justify-center xs:items-center lg:justify-start lg:items-start">
          <Card className="w-[340px] box">
            <CardHeader>
              <CardTitle className="text-center">
                Add Dates For Prices
              </CardTitle>
            </CardHeader>
            <CardDescription>
              <CardContent>
                {" "}
                <div className="flex">
                  <div className=" hover:rounded-3xl p-2 flex flex-col justify-center items-center border border-gray-500 px-3 hover:bg-[#DDDD]">
                    <h1>Checkin</h1>
                    <CalendarForm />
                  </div>

                  <div className=" hover:rounded-3xl p-2 flex flex-col justify-center items-center border border-gray-500 px-3 hover:bg-[#DDDD]">
                    <h1>CheckOut</h1>
                    <CalendarForm />
                  </div>
                </div>
                <div className="border border-gray-500 flex justify-center items-center">
                  <GuestCount text={"Add Guest"} />
                </div>
              </CardContent>
            </CardDescription>
            <CardFooter className="flex flex-col items-center justify-center">
              <Button className="bg-red-600 w-full">Reserve</Button>
              <p className="mt-4">You won't be charged yet</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Wrapper>
  );
};

export default ThirdSection;
