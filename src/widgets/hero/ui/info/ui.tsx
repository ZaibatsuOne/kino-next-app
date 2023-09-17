import { getMovieHours, getMovieMin, getMovieSeasons } from "@/shared/lib/func";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";

import { MovieAgeRating, MovieLength } from ".";

interface Props {
  movie: MovieDtoV13 | null;
}

export const Info: FC<Props> = ({ movie }) => {
  const movieLengthHours: null | number = getMovieHours(movie);
  const movieLengthMin: null | number = getMovieMin(movie);
  const seasons: null | number | undefined = getMovieSeasons(movie);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        {MovieAgeRating(movie)}
        <div>{movie?.year}</div>
        {seasons !== null ? <span>•</span> : null}
        {MovieLength(movie, movieLengthHours, movieLengthMin, seasons)}
      </div>
      <div className="flex gap-2">
        {movie?.genres?.map((genre) => (
          <span className="capitalize" key={genre.name}>
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
};
