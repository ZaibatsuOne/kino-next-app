import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";

export const MovieAgeRating = (movie: MovieDtoV13) => {
  return movie?.ageRating ? (
    <div className="flex items-center justify-center rounded-lg w-10 h-6 bg-[#31343E]">
      <p>{movie.ageRating}+</p>
    </div>
  ) : null;
};

export const MovieLength = (
  movie: MovieDtoV13,
  movieLengthHours: number,
  movieLengthMin: number,
  seasons: number
) => {
  if (movie.isSeries === true) {
    return (
      <span>
        {seasons === 1 ? <p>{seasons} сезон</p> : <p>{seasons} сезонов</p>}
      </span>
    );
  } else {
    return (
      <span>
        {movieLengthHours} ч {movieLengthMin} мин
      </span>
    );
  }
};
