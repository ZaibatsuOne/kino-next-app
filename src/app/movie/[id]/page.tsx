import { getMovieById } from "@/shared/api";
import { Hero } from "@/widgets/hero";
import { NextPage } from "next";

interface Props {
  params: { id: number };
}
const MovieByIdPage: NextPage<Props> = async ({ params }) => {
  const movie = await getMovieById(params.id);
  return <Hero movie={movie} />;
};

export default MovieByIdPage;
