import {
  MovieQueryBuilder,
  SPECIAL_VALUE,
} from "@openmoviedb/kinopoiskdev_client";

const queryBuilder = new MovieQueryBuilder();

export const queryPopularSerials = queryBuilder
  .select(["name", "backdrop.url", "poster.url"])
  .filterRange("year", [2019, 2023])
  .filterRange("rating.kp", [6, 10])
  .filterExact("name", SPECIAL_VALUE.NOT_NULL)
  .filterExact("poster.url", SPECIAL_VALUE.NOT_NULL)
  .filterExact("isSeries", true)
  .paginate(1, 10)
  .build();
