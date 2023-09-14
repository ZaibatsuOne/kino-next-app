import { FC } from "react";
import { Hero } from "@/widgets/hero";
import { InTrendCategory } from "./in-trend/ui";
import { PopularSerials } from "./popular-serials";

export const SeriesPage: FC = (props) => {
  const { movie, popularSerials } = props;
  return (
    <main>
      <Hero movie={movie} />
      <section className="flex flex-col gap-14 container">
        <InTrendCategory movie={movie} />
        <PopularSerials popularSerials={popularSerials} />
      </section>
    </main>
  );
};
