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
  rusSerials: MovieDocsResponseDtoV13 | null;
}
export const RussianSerials: FC<Props> = (props) => {
  const { rusSerials } = props;

  return (
    <Category>
      <CategoryTitle>Российские сериалы</CategoryTitle>
      <CategoryCarousel>
        {rusSerials?.docs?.map((item: MovieDtoV13) => (
          <SwiperSlide key={item.id}>
            <MovieShortCard movie={item} />
          </SwiperSlide>
        ))}
      </CategoryCarousel>
    </Category>
  );
};
