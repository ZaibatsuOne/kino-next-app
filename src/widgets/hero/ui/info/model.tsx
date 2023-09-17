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
    if (seasons === 1 || seasons % 10 === 1) {
      return <p>{seasons} сезон</p>;
    } else if (
      seasons === 2 ||
      seasons === 3 ||
      seasons === 4 ||
      seasons % 10 === 2 ||
      seasons % 10 === 3 ||
      seasons % 10 === 4
    ) {
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
