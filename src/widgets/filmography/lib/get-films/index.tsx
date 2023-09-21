import { MovieInPerson } from "@openmoviedb/kinopoiskdev_client";
import Link from "next/link";

export const FilmographyList = (moviesList: MovieInPerson[]) => {
  return (
    <ul>
      {moviesList.map((movie, index) => (
        <>
          {movie.name ? (
            <li className="flex justify-between" key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                <span>
                  {index + 1}. {movie.name}
                </span>
              </Link>
              {movie.enProfession === "actor" ? (
                <span>Актер</span>
              ) : movie.enProfession === "producer" ? (
                <span>Продюсер</span>
              ) : (
                <span>Камео</span>
              )}
            </li>
          ) : null}
        </>
      ))}
    </ul>
  );
};
