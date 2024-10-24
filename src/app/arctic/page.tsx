import { Image } from "sanity";
import { CarouselComp } from "../components/Carousal";
// Import Client from sanity client
import { client } from "@/sanity/lib/client";
import { Card } from "@/components/ui/card";
import Wrapper from "../components/Wrapper";

// Created Card Interface
interface Card {
  countryName: string;
  rating: string;
  images: Image;
  duration: string;
  _id: string;
  distance:number
  price:number
}

// fetch data fucntion
 export const fetchData = async () => {
  try {
    const data = await client.fetch(`*[_type=="card"]{
      
      countryName,
      rating,
      images,
      duration,
      distance,
      _id,
      price
      
      
      }`,{
        Cache:"store"
      }) ;

    return data;
  } catch (error: any) {
    console.log(error.message);
    console.log("jnjfnjfnj")
  }
};

// component
const page = async () => {
  const data: Card[] = await fetchData();
   console.log(data)
 
  return (
    <Wrapper>
    <div className="w-full h-[200vh] flex justify-center  mt-7">
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-center">
              <CarouselComp images={item.images} />
            </div>
            <div className="flex pl-6 flex-col">
              <h1 className="font-sans text-lg ">{item.countryName}</h1>
              <h2 className="text-gray-400">{item.distance} kilometers away</h2>
              <h2 className="text-gray-400"> 5 nights.{item.duration}</h2>
              <a className="text-black underline"> ${item.price} before taxes</a>

            </div>
          </div>
        ))}
      </div>
    </div>
    </Wrapper>
  );
};

export default page;
