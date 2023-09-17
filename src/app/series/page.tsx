import movieService from "@/shared/api/movie.service";
import { Hero } from "@/widgets/hero";
import { Metadata } from "next";
import { FC } from "react";

export const getMovies = async () => {
  const { data } = await movieService.getById(464963);
  return data;
};

export const metadata: Metadata = {
  description: "Смотреть онлайн сериалы Disney",
  title: "Disney - Сериалы",
};

export const Page: FC = async () => {
  const movie = await getMovies();

  return <Hero movie={movie} />;
};

export default Page;
