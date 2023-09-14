import { Filter, MovieFields } from "@openmoviedb/kinopoiskdev_client";

import { kp } from "./baseApi";

const LIMIT = 10;
class MovieService {
  async getById(id: number) {
    return kp.movie.getById(id);
  }
  async getNewMovies() {
    const query: Filter<MovieFields> = {
      "rating.kp": "5-9",
      year: 2023,
      sortField: "votes.filmCritics",
      sortType: "-1",
      limit: LIMIT,
    };
  }
}

export default new MovieService();
