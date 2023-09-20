import { getNewSeries } from "@/shared/api";
import { New as NewSection } from "@/widgets/new";

const Novie = async () => {
  const movies = await getNewSeries();
  return <NewSection movies={movies} type="сериалы" />;
};

export default Novie;
