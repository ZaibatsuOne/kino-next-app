import { getPopularSeries } from "@/shared/api";
import { Popular as PopularSection } from "@/widgets/popular";

const Popular = async () => {
  const movies = await getPopularSeries();
  return <PopularSection movies={movies} type="сериалы" />;
};

export default Popular;
