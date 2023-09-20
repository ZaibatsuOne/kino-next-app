"use client";
import { MovieLongCard } from "@/entities/movie";
import { ICategoryWidget } from "@/shared/config/types";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import { Category, CategoryCarousel, CategoryTitle } from "../category";

export const Popular: FC<ICategoryWidget> = (props) => {
  const { movies, type } = props;
  return (
    <Category>
      <CategoryTitle className="container">Популярные {type}</CategoryTitle>
      <CategoryCarousel>
        {movies?.docs.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieLongCard movie={movie} />
          </SwiperSlide>
        ))}
      </CategoryCarousel>
    </Category>
  );
};
