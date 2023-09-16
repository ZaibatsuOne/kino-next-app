import { Hero } from "@/widgets/hero";
import { NextPage } from "next";

export const HomePage: NextPage = (props) => {
  const { movie } = props;
  return (
    <main>
      <Hero movie={movie} />
    </main>
  );
};
