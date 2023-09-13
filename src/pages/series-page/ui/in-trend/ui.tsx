import { Category, CategoryCarousel, CategoryTitle } from "@/widgets/category";
import { MovieLongCard, MovieShortCard } from "@/entities/movie";

import { FC } from "react";

export const InTrendCategory: FC = () => {
  return (
    <Category>
      <CategoryTitle>В тренде</CategoryTitle>
      <CategoryCarousel>
        <MovieShortCard />
        <MovieShortCard />
        <MovieShortCard />
        <MovieShortCard />
      </CategoryCarousel>
    </Category>
  );
};
