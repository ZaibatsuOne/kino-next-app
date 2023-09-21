"use client";
import { cn } from "@/shared/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FC, PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Mousewheel, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper } from "swiper/react";

interface Props extends PropsWithChildren {
  count?: number;
  shadow?: boolean;
  slidesButtons?: boolean;
}
export const Carousel: FC<Props> = ({
  children,
  count = 5,
  shadow = false,
  slidesButtons = false,
}) => {
  return (
    <div className="relative w-full h-full overflow-y-visible overflow-hidden">
      {shadow ? (
        <>
          <div className="absolute z-10 w-[10%] h-full bg-gradient-to-r from-[#1A1D29] to-transparent " />
          <div className="absolute z-10 w-[10%] h-full bg-gradient-to-l from-[#1A1D29] to-transparent right-0 " />
        </>
      ) : null}
      <Swiper
        className="relative container"
        initialSlide={0.5}
        modules={[Pagination, Navigation, Scrollbar, Mousewheel]}
        mousewheel={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={count}
        spaceBetween={20}
        style={{
          overflowX: "visible",
          paddingBottom: 20,
          paddingLeft: 20,
          paddingTop: 20,
        }}
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
    </div>
  );
};
