import {
  Filter,
  MovieFields,
  MovieQueryBuilder,
  SPECIAL_VALUE,
} from "@openmoviedb/kinopoiskdev_client";

const queryBuilder = new MovieQueryBuilder();

export const queryPopularSerials = queryBuilder
  .select(["name", "id", "poster.url", "description", "rating.kp", "ageRating"])
  .filterRange("year", [2019, 2023])
  .filterRange("rating.kp", [6, 10])
  .filterExact("name", SPECIAL_VALUE.NOT_NULL)
  .filterExact("poster.url", SPECIAL_VALUE.NOT_NULL)
  .filterExact("isSeries", true)
  .paginate(1, 10)
  .build();

export const queryRusSerials: Filter<MovieFields> = {
  ageRating: "16-80",
  "countries.name": "Россия",
  limit: 10,
  name: "!null",
  page: 1,
  "poster.url": "!null",
  "rating.kp": "6-10",
  selectFields: ["id", "name", "poster.url", "rating.kp", "ageRating"],
  sortField: "premiere.russia",
  sortType: ["-1"],
  year: "2021-2023",
};

export const queryNewSerials: Filter<MovieFields> = {
  ageRating: "16-80",
  isSeries: true,
  limit: 10,
  name: "!null",
  page: 1,
  "poster.url": "!null",
  "rating.kp": "7-10",
  selectFields: ["id", "name", "poster.url", "rating.kp", "ageRating"],
  sortField: "premiere.world",
  sortType: "-1",
  year: "2023-2023",
};

export const queryAnimationSerials: Filter<MovieFields> = {
  ageRating: "14-80",
  "genres.name": "мультфильм",
  isSeries: true,
  limit: 15,
  name: "!null",
  page: 1,
  "poster.url": "!null",
  "rating.kp": "6-10",
  selectFields: ["id", "name", "poster.url", "rating.kp", "ageRating"],
  sortField: "votes.kp",
  sortType: "-1",
  year: "2018-2023",
};

export const queryDocumentarySerials: Filter<MovieFields> = {
  ageRating: "14-80",
  "genres.name": "документальный",
  isSeries: true,
  limit: 15,
  name: "!null",
  page: 1,
  "poster.url": "!null",
  "rating.kp": "6-10",
  selectFields: ["id", "name", "poster.url", "rating.kp", "ageRating"],
  sortField: "votes.kp",
  sortType: "-1",
  year: "2016-2023",
};
