"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { cn } from "@/shared/lib/utils";

interface Props extends PropsWithChildren {
  className?: string;
}
export const Carousel: FC<Props> = ({ children, className }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Scrollbar]}
      spaceBetween={8}
      slidesPerView={5}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      effect="flip"
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      className={className}
    >
      {children}
      <div className="slider-controler flex items-center">
        {[...Array(5)].map((_, index) => {
          return (
            <div
              className={cn(
                `backdrop-blur-xl rounded-2xl slider-arrow text-2xl`,
                index === 0 ? "swiper-button-prev" : "swiper-button-next"
              )}
            >
              {index === 0 ? <ChevronLeft /> : <ChevronRight />}
            </div>
          );
        })}
      </div>
    </Swiper>
  );
};
