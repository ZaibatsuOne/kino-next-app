import { FC } from "react";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";

interface Props {
  movie: MovieDtoV13 | null;
}
export const Description: FC<Props> = (props) => {
  const { movie } = props;

  return (
    <p className="text-lg line-clamp-4">
      {movie?.description ? (
        movie.description
      ) : (
        <span>Описание отсутствует</span>
      )}
    </p>
  );
};
