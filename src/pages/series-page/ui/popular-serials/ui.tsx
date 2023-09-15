import { Category, CategoryTitle } from "@/widgets/category";
import {
  MovieDocsResponseDtoV13,
  MovieDtoV13,
} from "@openmoviedb/kinopoiskdev_client";

import { FC } from "react";
import { MovieLongCard } from "@/entities/movie";

interface Props {
  popularSerials: MovieDocsResponseDtoV13 | null;
}
export const PopularSerials: FC<Props> = (props) => {
  const { popularSerials } = props;
  return (
    <Category>
      <CategoryTitle>Популярные сериалы</CategoryTitle>
      <section className="grid grid-cols-5 gap-5">
        {popularSerials?.docs.map((movie: MovieDtoV13) => (
          <MovieLongCard movie={movie} />
        ))}
      </section>
    </Category>
  );
};
