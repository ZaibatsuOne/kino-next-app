"use client";

import { cn } from "@/shared/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props extends PropsWithChildren {
  className?: string;
}
export const Carousel: FC<Props> = ({ children, className }) => {
  return (
    <Swiper
      className={className}
      effect="flip"
      modules={[Pagination, Navigation, Scrollbar]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}
      slidesPerView={5}
      spaceBetween={8}
    >
      {children}
      <div className="slider-controler flex items-center">
        {[...Array(2)].map((_, index) => {
          return (
            <div
              className={cn(
                `backdrop-blur-xl rounded-2xl slider-arrow text-2xl`,
                index === 0 ? "swiper-button-prev" : "swiper-button-next"
              )}
              key={index}
            >
              {index === 0 ? <ChevronLeft /> : <ChevronRight />}
            </div>
          );
        })}
      </div>
    </Swiper>
  );
};
