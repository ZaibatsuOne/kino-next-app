"use client";

import { MovieShortCard } from "@/entities/movie";
import { Category, CategoryCarousel, CategoryTitle } from "@/widgets/category";
import {
  MovieDocsResponseDtoV13,
  MovieDtoV13,
} from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";

interface Props {
  movies: MovieDocsResponseDtoV13 | null;
}
export const RussianSerials: FC<Props> = (props) => {
  const { movies } = props;

  return (
    <Category>
      <CategoryTitle>Российские сериалы</CategoryTitle>
      <CategoryCarousel>
        {movies?.docs?.map((movie: MovieDtoV13) => (
          <SwiperSlide key={movie.id}>
            <MovieShortCard movie={movie} />
          </SwiperSlide>
        ))}
      </CategoryCarousel>
    </Category>
  );
};
