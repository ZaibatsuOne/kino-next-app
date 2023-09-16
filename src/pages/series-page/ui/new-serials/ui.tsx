"use client";

import { Category, CategoryCarousel, CategoryTitle } from "@/widgets/category";
import {
  MovieDocsResponseDtoV13,
  MovieDtoV13,
} from "@openmoviedb/kinopoiskdev_client";

import { FC } from "react";
import { MovieShortCard } from "@/entities/movie";
import { SwiperSlide } from "swiper/react";

interface Props {
  newSerials: MovieDocsResponseDtoV13 | null;
}
export const NewSerials: FC<Props> = (props) => {
  const { newSerials } = props;
  return (
    <Category>
      <CategoryTitle>Новые сериалы</CategoryTitle>
      <CategoryCarousel className="overflow-visible">
        {newSerials?.docs?.map((item: MovieDtoV13) => (
          <SwiperSlide key={item.id}>
            <MovieShortCard movie={item} />
          </SwiperSlide>
        ))}
      </CategoryCarousel>
    </Category>
  );
};
