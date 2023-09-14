import { FC } from "react";
import { Hero } from "@/widgets/hero";

export const HomePage: FC = (props) => {
  const { movie } = props;
  return (
    <main>
      <Hero movie={movie} />
    </main>
  );
};
