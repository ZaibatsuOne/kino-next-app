import { Hero } from "@/widgets/hero";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { NextPage } from "next";

interface Props {
  movie: MovieDtoV13 | null;
}
export const HomePage: NextPage<Props> = (props) => {
  const { movie } = props;
  return (
    <main>
      <Hero movie={movie} />
    </main>
  );
};
