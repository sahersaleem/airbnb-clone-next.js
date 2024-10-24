import { Image } from "sanity";
import { CarouselComp } from "../components/Carousal";
// Import Client from sanity client
import { client } from "@/sanity/lib/client";
import { Card } from "@/components/ui/card";
import Wrapper from "../components/Wrapper";
import { fetchData } from "../arctic/page";
import { Button } from "@/components/ui/button";
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






const Card = async() => {
  
    const data: Card[] = await fetchData();
    console.log(data)
  
   return (
     <Wrapper>
     <div className="w-full  flex  justify-center items-center mt-7 h-auto pb-8">
       <div className="flex sm:flex-wrap xs:flex-col sm:flex-row items-center justify-center">
         {data.map((item, index) => (
           <div key={index}>
             <div className="flex items-center justify-center">
               <CarouselComp images={item.images} />
             </div>
             <div className="flex  xs:pl-7 sm:pl-6 flex-col">
               <h1 className="font-sans text-lg ">{item.countryName}</h1>
               <h2 className="text-gray-400">{item.distance} kilometers away</h2>
               <h2 className="text-gray-400"> 5 nights.{item.duration}</h2>
               <a className="text-black underline"> ${item.price} before taxes</a>
 
             </div>
           </div>
         ))}
         <div className="text-center w-full items-center justify-center xs:p-4 sm:p-14"> <h1 className="text-center font-sans text-xl font-bold ">Conitnue  Cities</h1>
         <Button className="mt-5">Show More</Button></div>
           
       </div>
    
     </div>
     </Wrapper>
   );
  
}

export default Card
