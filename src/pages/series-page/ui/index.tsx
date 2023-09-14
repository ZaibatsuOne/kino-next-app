import { FC } from "react";
import { Hero } from "@/widgets/hero";
import { InTrendCategory } from "./in-trend/ui";

export const SeriesPage: FC = (props) => {
  const { movie } = props;
  return (
    <main>
      <Hero movie={movie} />
      <section className="flex flex-col gap-14 container">
        <InTrendCategory movie={movie} />
      </section>
    </main>
  );
};
