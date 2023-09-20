import { MovieShortCard } from "@/entities/movie";
import { LinkedMovie, MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";

import { Category, CategoryTitle } from "../category";

interface Props {
  movie: MovieDtoV13 | null;
}
export const Similliar: FC<Props> = ({ movie }) => {
  const similiar: LinkedMovie[] | null = movie?.similarMovies ?? null;

  return (
    <>
      {similiar !== null && similiar.length > 0 ? (
        <section className="container">
          <Category>
            <CategoryTitle className="pb-5">Похожее</CategoryTitle>
            <div className="grid grid-cols-4 gap-5">
              {similiar?.slice(0, 8).map((movie) => (
                <MovieShortCard key={movie.id} movie={movie as MovieDtoV13} />
              ))}
            </div>
          </Category>
        </section>
      ) : null}
    </>
  );
};
