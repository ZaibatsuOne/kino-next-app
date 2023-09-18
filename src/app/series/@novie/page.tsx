import { NewSerials } from "@/pages/series-page/ui/new-serials";
import { getNewSeries } from "@/shared/api";

const Novie = async () => {
  const movies = await getNewSeries();
  return <NewSerials movies={movies} />;
};

export default Novie;
