import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const movieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.kinopoisk.dev" }),

  endpoints: (build) => ({
    getFilmById: build.query<MovieDtoV13, string>({
      query: (id) => `/movie?search=${id}&field=id&`,
    }),
  }),

  reducerPath: "movieApi",
});
