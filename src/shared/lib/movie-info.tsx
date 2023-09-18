import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";

import { getMovieHours, getMovieMin, getMovieSeasons } from "./func";

export const MovieAgeRating = (movie: MovieDtoV13 | null) => {
  return movie?.ageRating ? (
    <div className="flex items-center justify-center rounded-lg w-10 h-6 bg-[#31343E]">
      <p>{movie.ageRating}+</p>
    </div>
  ) : null;
};

export const MovieLength = (
  movie: MovieDtoV13 | null
  // movieLengthHours: null | number,
  // movieLengthMin: null | number,
  // seasons: null | number | undefined
) => {
  const movieLengthHours: null | number = getMovieHours(movie);
  const movieLengthMin: null | number = getMovieMin(movie);
  const seasons: null | number | undefined = getMovieSeasons(movie);
  if (movie?.isSeries === true) {
    if (!seasons) {
      return null;
    } else if (seasons % 10 === 1) {
      return <p>{seasons} сезон</p>;
    } else if (seasons % 10 === 2 || seasons % 10 === 3 || seasons % 10 === 4) {
      return <p>{seasons} сезона</p>;
    } else {
      return <p>{seasons} сезонов</p>;
    }
  } else {
    return (
      <span>
        {movieLengthHours} ч {movieLengthMin} мин
      </span>
    );
  }
};

export const MovieCountry = (movie: MovieDtoV13) => {
  if (!movie || movie.countries === undefined || movie.countries?.length <= 0) {
    return null;
  }
  return (
    <ul className="flex items-center gap-2 text-sm">
      {movie.countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
};

export const MovieYear = (movie: MovieDtoV13) => {
  if (!movie || movie.year === undefined) {
    return null;
  }
  return <span>{movie.year}</span>;
};
