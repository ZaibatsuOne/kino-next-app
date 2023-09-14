import { create } from "zustand";
import { kp } from "../api/baseApi";
import movieService from "../api/movie.service";

export const usePopularMovies = create((set) => ({
  movies: [],
  fetchNewMovies: async () => {
    const query = {
      "rating.kp": "5-9",
      year: 2023,
      sortField: "votes.filmCritics",
      sortType: "-1",
      limit: 10,
    };
    const { data } = await kp.movie.getByFilters(query);
    set({ movies: data });
  },
}));
