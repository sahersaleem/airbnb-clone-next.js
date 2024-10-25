"use client";

import React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";





export  function CarouselComp({images}:{images:any}) {
 
  console.log(urlFor(images[0]).url())
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {images.map((item:any , index:number) => (
          
            <CarouselItem key={index}>
               
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  
              <Link href={"/detail"}><Image src={urlFor(item).url()} alt="dnn" width={500} height={400}   className="h-[270px]  object-cover object-center w rounded-lg" priority={true}/></Link>
              
                </CardContent>
            
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
