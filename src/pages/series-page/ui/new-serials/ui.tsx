"use client";

import { MovieShortCard } from "@/entities/movie";
import { Carousel } from "@/shared/ui/carousel/ui";
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
export const NewSerials: FC<Props> = (props) => {
  const { movies } = props;
  return (
    <Category>
      <CategoryTitle>Новые сериалы</CategoryTitle>
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
