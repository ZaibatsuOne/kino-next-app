import { Hero } from "@/widgets/hero";
import {
  MovieDocsResponseDtoV13,
  MovieDtoV13,
} from "@openmoviedb/kinopoiskdev_client";
import { NextPage } from "next";

import { InTrendCategory } from "./in-trend/ui";
import { NewSerials } from "./new-serials";
import { PopularSerials } from "./popular-serials";
import { RussianSerials } from "./russian-serials";

interface Props {
  movie: MovieDtoV13 | null;
  newSerials: MovieDocsResponseDtoV13 | null;
  popularSerials: MovieDocsResponseDtoV13 | null;
  rusSerials: MovieDocsResponseDtoV13 | null;
}
export const SeriesPage: NextPage<Props> = (props) => {
  const { movie, newSerials, popularSerials, rusSerials } = props;
  return (
    <main>
      <Hero movie={movie} />
      <section className="flex flex-col gap-16 container">
        <InTrendCategory />
        <PopularSerials popularSerials={popularSerials} />
        <RussianSerials rusSerials={rusSerials} />
        <NewSerials newSerials={newSerials} />
      </section>
    </main>
  );
};
