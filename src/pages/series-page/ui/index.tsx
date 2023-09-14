import { FC } from "react";
import { Hero } from "@/widgets/hero";
import { InTrendCategory } from "./in-trend/ui";
import { PopularSerials } from "./popular-serials";
import { RussianSerials } from "./russian-serials/ui";

export const SeriesPage: FC = (props) => {
  const { movie, popularSerials, rusSerials } = props;
  return (
    <main>
      <Hero movie={movie} />
      <section className="flex flex-col gap-16 container">
        <InTrendCategory movie={movie} />
        <PopularSerials popularSerials={popularSerials} />
        <RussianSerials rusSerials={rusSerials} />
      </section>
    </main>
  );
};
