import { kp } from "./baseApi";

class MovieService {
  async getById(id: number) {
    return kp.movie.getById(id);
  }
  // async get

  async getForHero(id: number) {}
}

export default new MovieService();
