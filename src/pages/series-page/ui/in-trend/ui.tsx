"use client";

import { MovieLongCard, MovieShortCard } from "@/entities/movie";
import { kp } from "@/shared/api/baseApi";
import { usePopularMovies } from "@/shared/lib/store";
import { Category, CategoryCarousel, CategoryTitle } from "@/widgets/category";
import { MovieQueryBuilder, SORT_TYPE } from "@openmoviedb/kinopoiskdev_client";
import { FC, useEffect, useState } from "react";

export const InTrendCategory: FC = () => {
  return (
    <Category>
      <CategoryTitle>В тренде</CategoryTitle>

      <CategoryCarousel>
        {/* {movie.docs.map((item) => ( */}
        {/* <MovieShortCard movie={item} /> */}
        {/* ))} */}
      </CategoryCarousel>
    </Category>
  );
};
