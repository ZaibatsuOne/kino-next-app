import { MovieLongCard } from "@/entities/movie";
import { Category, CategoryTitle } from "@/widgets/category";
import {
  MovieDocsResponseDtoV13,
  MovieDtoV13,
} from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";

interface Props {
  movies: MovieDocsResponseDtoV13 | null;
}
export const PopularSerials: FC<Props> = (props) => {
  const { movies } = props;
  return (
    <Category>
      <CategoryTitle>Популярные сериалы</CategoryTitle>
      <section className="grid grid-cols-5 gap-5">
        {movies?.docs.map((movie: MovieDtoV13) => (
          <MovieLongCard key={movie.id} movie={movie} category="series" />
        ))}
      </section>
    </Category>
  );
};
