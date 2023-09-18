import { FC } from "react";
import { Category, CategoryTitle } from "../category";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { MovieShortCard } from "@/entities/movie";

interface Props {
  movie: MovieDtoV13;
}
export const Similliar: FC<Props> = ({ movie }) => {
  const { similarMovies } = movie;
  return (
    <section className="container">
      <Category>
        <CategoryTitle>Похожее</CategoryTitle>
        <div className="grid grid-cols-4 grid-rows-2 gap-5">
          {similarMovies?.slice(0, 8).map((movie) => (
            <MovieShortCard key={movie.id} movie={movie} />
          ))}
        </div>
      </Category>
    </section>
  );
};
