"use client";

import { cn } from "@/shared/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

interface Props extends PropsWithChildren {
  className?: string;
  count?: number;
  slidesButtons?: boolean;
}
export const Carousel: FC<Props> = ({
  children,
  className,
  count = 5,
  slidesButtons = true,
}) => {
  return (
    <Swiper
      className={className}
      initialSlide={0.5}
      modules={[Pagination, Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      slidesPerView={count}
      spaceBetween={8}
    >
      {children}
      {slidesButtons ? (
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
      ) : null}
    </Swiper>
  );
};
