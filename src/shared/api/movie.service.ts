import { kp } from "./baseApi";

class MovieService {
  async getById(id: number) {
    return kp.movie.getById(id);
  }
}

export default new MovieService();
