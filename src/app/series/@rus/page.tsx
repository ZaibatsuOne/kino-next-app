import { RussianSerials } from "@/pages/series-page/ui/russian-serials";
import { getRussianSeries } from "@/shared/api";

const Rus = async () => {
  const movies = await getRussianSeries();
  return <RussianSerials movies={movies} />;
};

export default Rus;
