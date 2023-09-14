import { Category, CategoryCarousel, CategoryTitle } from "@/widgets/category";
import { MovieLongCard, MovieShortCard } from "@/entities/movie";

import { FC } from "react";

export const InTrendCategory: FC = (props) => {
  const { movie } = props;
  return (
    <Category>
      <CategoryTitle>В тренде</CategoryTitle>
      {movie.name}
      <CategoryCarousel>
        {/* {movie.docs.map((item) => ( */}
        {/* <MovieShortCard movie={item} /> */}
        {/* ))} */}
      </CategoryCarousel>
    </Category>
  );
};
