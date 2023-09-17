import { RussianSerials } from "@/pages/series-page/ui/russian-serials";
import { queryRusSerials } from "@/shared/api";
import { kp } from "@/shared/api/baseApi";

export const getMovies = async () => {
  const { data } = await kp.movie.getByFilters(queryRusSerials);
  return data;
};
const Rus = async () => {
  const movies = await getMovies();
  return <RussianSerials movies={movies} />;
};

export default Rus;
