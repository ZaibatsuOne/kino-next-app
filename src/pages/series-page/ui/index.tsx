import {
  MovieDocsResponseDtoV1,
  MovieDocsResponseDtoV13,
  MovieDtoV13,
} from "@openmoviedb/kinopoiskdev_client";

import { FC } from "react";
import { Hero } from "@/widgets/hero";
import { InTrendCategory } from "./in-trend/ui";
import { NewSerials } from "./new-serials/ui";
import { PopularSerials } from "./popular-serials";
import { RussianSerials } from "./russian-serials/ui";

interface Props {
  movie: MovieDtoV13 | null;
  rusSerials: MovieDocsResponseDtoV13 | null;
  newSerials: MovieDocsResponseDtoV13 | null;
  popularSerials: MovieDocsResponseDtoV13 | null;
}
export const SeriesPage: FC<Props> = (props) => {
  const { movie, popularSerials, rusSerials, newSerials } = props;
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
