import { FC } from "react";

export const Description: FC = (props) => {
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
