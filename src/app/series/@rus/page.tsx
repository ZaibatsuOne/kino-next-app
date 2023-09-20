import { getRussianSeries } from "@/shared/api";
import { Russian as RussianSection } from "@/widgets/russian";

const Rus = async () => {
  const movies = await getRussianSeries();
  return <RussianSection movies={movies} type="сериалы" />;
};

export default Rus;
