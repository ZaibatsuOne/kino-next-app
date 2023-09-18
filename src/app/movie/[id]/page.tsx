import { getMovieById } from "@/shared/api";
import { ActorsList } from "@/widgets/actors";
import { Hero } from "@/widgets/hero";
import { NextPage } from "next";

interface Props {
  params: { id: number };
}
const MovieByIdPage: NextPage<Props> = async ({ params }) => {
  const movie = await getMovieById(params.id);
  return (
    <section>
      <Hero movie={movie} />
      <ActorsList movie={movie} />
    </section>
  );
};

export default MovieByIdPage;
