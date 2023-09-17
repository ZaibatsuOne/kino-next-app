import { NewSerials } from "@/pages/series-page/ui/new-serials";
import { kp } from "@/shared/api/baseApi";
import { queryNewSerials } from "@/shared/api/querySetting";

export const getMovies = async () => {
  const { data } = await kp.movie.getByFilters(queryNewSerials);
  return data;
};
const Novie = async () => {
  const movies = await getMovies();
  return <NewSerials movies={movies} />;
};

export default Novie;
