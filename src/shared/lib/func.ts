import { MovieDtoV13, SeasonInfo } from "@openmoviedb/kinopoiskdev_client";

export const getMovieSeasons = (movie: MovieDtoV13) => {
  if (!movie.isSeries === undefined) {
    const seasonCount: SeasonInfo =
      movie?.seasonsInfo[movie.seasonsInfo?.length - 1];
    return seasonCount.number;
  } else {
    return null;
  }
};

export const getMovieHours = (movie: MovieDtoV13) => {
  const hours: number = movie.movieLength / 60;
  return Math.floor(hours);
};

export const getMovieMin = (movie: MovieDtoV13) => {
  const mins: number = movie.movieLength % 60;
  return Math.floor(mins);
};
