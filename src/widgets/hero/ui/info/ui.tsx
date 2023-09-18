import { MovieAgeRating, MovieLength } from "@/shared/lib";
import { getMovieHours, getMovieMin, getMovieSeasons } from "@/shared/lib/func";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";

interface Props {
  movie: MovieDtoV13 | null;
}

export const Info: FC<Props> = ({ movie }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        {MovieAgeRating(movie)}
        <div>{movie?.year}</div>
        <span>•</span>
        {MovieLength(movie)}
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
