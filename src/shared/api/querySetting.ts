import {
  Filter,
  MovieFields,
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

// export const queryRussianSerials = queryBuilder
//   .select(["name", "poster.url"])
//   .filterRange("year", [2019, 2023])
//   .sort("premiere.russia", "-1")
//   .filterRange("votes.russianFilmCritics", [7, 10])
//   .build();

export const queryRusSerials: Filter<MovieFields> = {
  selectFields: ["name", "poster.url"],
  year: "2021-2023",
  "poster.url": "!null",
  name: "!null",
  "rating.kp": "6-10",
  "countries.name": "Россия",
  ageRating: "18-80",
  sortField: "premiere.russia",
  sortType: ["-1"],
  page: 1,
  limit: 10,
};