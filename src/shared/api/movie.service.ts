import { Filter, MovieFields } from "@openmoviedb/kinopoiskdev_client";

import { kp } from "./baseApi";

const LIMIT = 10;
class MovieService {
  async getById(id: number) {
    return kp.movie.getById(id);
  }
  async getNewMovies() {
    const query: Filter<MovieFields> = {
      limit: LIMIT,
      "rating.kp": "5-9",
      sortField: "votes.filmCritics",
      sortType: "-1",
      year: 2023,
    };
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new MovieService();
