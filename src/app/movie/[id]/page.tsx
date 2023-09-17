import { kp } from "@/shared/api/baseApi";
import { Hero } from "@/widgets/hero";
import { NextPage } from "next";

export const getMovieById = async (id: number) => {
  const { data } = await kp.movie.getById(id);
  return data;
};

interface Props {
  params: { id: number };
}
const MovieByIdPage: NextPage<Props> = async ({ params }) => {
  const movie = await getMovieById(params.id);
  return <Hero movie={movie} />;
};

export default MovieByIdPage;
