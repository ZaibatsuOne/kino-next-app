import { MovieDtoV13, SeasonInfo } from "@openmoviedb/kinopoiskdev_client";

export const getMovieSeasons = (movie: MovieDtoV13 | null) => {
  if (
    movie !== null &&
    movie?.isSeries !== false &&
    movie.seasonsInfo &&
    movie.seasonsInfo?.length > 0
  ) {
    const seasonCount: SeasonInfo =
      movie.seasonsInfo[movie.seasonsInfo.length - 1];
    return seasonCount.number;
  } else {
    return null;
  }
};

export const getMovieHours = (movie: MovieDtoV13 | null) => {
  if (movie !== null && movie.movieLength !== undefined) {
    const hours: number = movie?.movieLength / 60;
    return Math.floor(hours);
  } else {
    return null;
  }
};

export const getMovieMin = (movie: MovieDtoV13 | null) => {
  if (movie !== null && movie.movieLength !== undefined) {
    const mins: number = movie.movieLength % 60;
    return Math.floor(mins);
  } else {
    return null;
  }
};
