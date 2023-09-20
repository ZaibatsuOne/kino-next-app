"use client";

import { MovieShortCard } from "@/entities/movie";
import { ICategoryWidget } from "@/shared/config/types";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";

import { Category, CategoryCarousel, CategoryTitle } from "../category";

export const DocumentarySection: FC<ICategoryWidget> = (props) => {
  const { movies, type } = props;
  return (
    <Category>
      <CategoryTitle className="container">Документальные {type}</CategoryTitle>
      <CategoryCarousel>
        {movies?.docs.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieShortCard movie={movie} />
          </SwiperSlide>
        ))}
      </CategoryCarousel>
    </Category>
  );
};
