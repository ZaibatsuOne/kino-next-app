import { kp } from "@/shared/api/baseApi";
import {
  MovieQueryBuilder,
  QueryBuilder,
} from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";

export const getFilm = async (query) => {
  const { data } = await kp.movie.getPossibleValuesByField("name");
  return data;
};

export const SearchList: FC = async () => {
  const queryBuilder = new MovieQueryBuilder();

  const query = queryBuilder.paginate(1, 10).query("Волк").build();

  return <div></div>;
};
