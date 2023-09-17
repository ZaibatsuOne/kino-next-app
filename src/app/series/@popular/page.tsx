import { PopularSerials } from "@/pages/series-page/ui/popular-serials";
import { queryPopularSerials } from "@/shared/api";
import { kp } from "@/shared/api/baseApi";

export const getMovie = async () => {
  const { data } = await kp.movie.getByFilters(queryPopularSerials);
  return data;
};

const Popular = async () => {
  const movies = await getMovie();
  return <PopularSerials movies={movies} />;
};

export default Popular;
