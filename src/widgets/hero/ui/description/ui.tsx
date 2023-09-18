"use client";

import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  movie: MovieDtoV13 | null;
}
export const Description: FC<Props> = (props) => {
  const { movie } = props;
  const pathname = usePathname();
  return (
    <>
      {pathname === `/movie/${movie?.id}` ? (
        <p className="text-lg">
          {movie?.description ? (
            movie.description
          ) : (
            <span>Описание отсутствует</span>
          )}
        </p>
      ) : (
        <p className="text-lg line-clamp-4">
          {movie?.description ? (
            movie.description
          ) : (
            <span>Описание отсутствует</span>
          )}
        </p>
      )}
    </>
  );
};
