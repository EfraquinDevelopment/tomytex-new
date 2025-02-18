"use client";

import React from "react";
import { WooProduct } from "@/types/woocommerce";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import ProductImage from "./product-image";

interface Props {
  images: WooProduct["images"];
  name: string;
}

const ProductImagesCarousel = ({ images, name }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        className="aspect-w-1 aspect-h-1  max-h-[550px] overflow-hidden"
        modules={[Navigation, Thumbs]}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {!images.length && (
          <ProductImage src="/placeholder.png" alt={`${name} image`} />
        )}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ProductImage src={image?.src} alt={`${name} image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className="hidden md:block mt-4"
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-20 rounded-lg cursor-pointer">
              <Image
                width={200}
                height={100}
                src={image?.src}
                alt={`${name} thumbnail ${index + 1}`}
                className={classNames(
                  "w-full rounded-2xl object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]",
                  {
                    "opacity-30": index !== activeIndex,
                  }
                )}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImagesCarousel;
