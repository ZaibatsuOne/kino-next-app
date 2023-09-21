import { getMovieById } from "@/shared/api";
import { ActorsList } from "@/widgets/actors";
import { Facts } from "@/widgets/facts";
import { Hero } from "@/widgets/hero";
import { Similliar } from "@/widgets/similliar";
import { Metadata, NextPage } from "next";

interface Props {
  params: { id: number };
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const movie = await getMovieById(params.id);
  return {
    title: "Disney - " + movie?.name,
  };
};

const MovieByIdPage: NextPage<Props> = async ({ params }) => {
  const movie = await getMovieById(params.id);
  return (
    <section className="flex flex-col gap-10">
      <Hero movie={movie} />
      <ActorsList movie={movie} />
      <Similliar movie={movie} />
      <Facts movie={movie} />
    </section>
  );
};

export default MovieByIdPage;
