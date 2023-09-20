import { getMovieById } from "@/shared/api";
import { ActorsList } from "@/widgets/actors";
import { Facts } from "@/widgets/facts";
import { Hero } from "@/widgets/hero";
import { Similliar } from "@/widgets/similliar";
import { NextPage } from "next";

interface Props {
  params: { id: number };
}
const MovieByIdPage: NextPage<Props> = async ({ params }) => {
  const movie = await getMovieById(params.id);
  return (
    <section className="flex flex-col gap-10">
      <Hero movie={movie} />
      <ActorsList movie={movie} />
      <Facts movie={movie} />
      <Similliar movie={movie} />
    </section>
  );
};

export default MovieByIdPage;
