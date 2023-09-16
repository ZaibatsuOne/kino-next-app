import { create } from "zustand";

import { kp } from "../api/baseApi";
import movieService from "../api/movie.service";

export const usePopularMovies = create((set) => ({
  fetchNewMovies: async () => {
    const query = {
      limit: 10,
      "rating.kp": "5-9",
      sortField: "votes.filmCritics",
      sortType: "-1",
      year: 2023,
    };
    const { data } = await kp.movie.getByFilters(query);
    set({ movies: data });
  },
  movies: [],
}));
