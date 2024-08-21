"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselHome = () => {
  return (
    <div className="relative mx-auto shadow-lg flex-grow md:h-[calc(100vh-90px)]">
      <div className="bottom-4 left-4 absolute text-[30px] text-black font-bold z-[1000]">
        <h1 className="lg:text-6xl text-3xl font-bold text-tomytex-secondary">TOMYTEX</h1>
        <p className="lg:text-3xl text-xl text-tomytex-secondary">Tu tienda de telas en línea</p>
      </div>
    <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={2000}
        className="overflow-hidden md:h-full"
    >
        <div className="relative h-full">
            <div className="bg-black opacity-50 absolute inset-0"></div>
            <img
                src="/img/tomytex.png"
                alt="Image 1"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="relative h-full">
            <div className="bg-black opacity-50 absolute inset-0"></div>
            <img
                src="/img/tomytex2.jpg"
                alt="Image 2"
                className="object-cover w-full h-full"
            />
        </div>
        <div className="relative h-full">
            <div className="bg-black opacity-50 absolute inset-0"></div>
            <img
                src="/img/tomytex3.jpg"
                alt="Image 3"
                className="object-cover w-full h-full"
            />
        </div>
    </Carousel>
    </div>
  );
};

export default CarouselHome;
