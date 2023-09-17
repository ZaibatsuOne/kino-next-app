import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";

export const MovieAgeRating = (movie: MovieDtoV13 | null) => {
  return movie?.ageRating ? (
    <div className="flex items-center justify-center rounded-lg w-10 h-6 bg-[#31343E]">
      <p>{movie.ageRating}+</p>
    </div>
  ) : null;
};

export const MovieLength = (
  movie: MovieDtoV13 | null,
  movieLengthHours: null | number,
  movieLengthMin: null | number,
  seasons: null | number | undefined
) => {
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
