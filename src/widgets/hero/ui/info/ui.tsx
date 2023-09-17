import { getMovieHours, getMovieMin, getMovieSeasons } from "@/shared/lib/func";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";

import { MovieAgeRating, MovieLength } from ".";

interface Props {
  movie: MovieDtoV13;
}

export const Info: FC<Props> = ({ movie }) => {
  const movieLengthHours: number = getMovieHours(movie);
  const movieLengthMin: number = getMovieMin(movie);
  const seasons = getMovieSeasons(movie);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        {MovieAgeRating(movie)}
        <div>{movie?.year}</div>
        <span>•</span>
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
