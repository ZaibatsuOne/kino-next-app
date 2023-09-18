import { PopularSerials } from "@/pages/series-page/ui/popular-serials";
import { getPopularSeries } from "@/shared/api";

const Popular = async () => {
  const movies = await getPopularSeries();
  return <PopularSerials movies={movies} />;
};

export default Popular;
