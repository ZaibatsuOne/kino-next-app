"use client";

import { Category, CategoryCarousel, CategoryTitle } from "@/widgets/category";

import { FC } from "react";
import { MovieShortCard } from "@/entities/movie";
import { SwiperSlide } from "swiper/react";

export const RussianSerials: FC = (props) => {
  const { rusSerials } = props;

  return (
    <Category>
      <CategoryTitle>Российские сериалы</CategoryTitle>
      <CategoryCarousel>
        {rusSerials?.docs?.map((item) => (
          <SwiperSlide>
            <MovieShortCard movie={item} />
          </SwiperSlide>
        ))}
      </CategoryCarousel>
    </Category>
  );
};
