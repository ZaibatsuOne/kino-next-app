import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";
import { Category, CategoryTitle } from "../category";

interface Props {
  movie: MovieDtoV13 | null;
}
export const Facts: FC<Props> = (props) => {
  const { movie } = props;
  return (
    <Category className="container">
      <CategoryTitle>Знаете ли вы, что…</CategoryTitle>
    </Category>
  );
};
