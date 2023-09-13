import { FC } from "react";
import { Hero } from "@/widgets/hero";
import { InTrendCategory } from "./in-trend/ui";

export const SeriesPage: FC = () => {
  return (
    <main>
      <Hero />
      <section className="flex flex-col gap-14 container">
        <InTrendCategory />
      </section>
    </main>
  );
};
