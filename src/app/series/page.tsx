import movieService from "@/shared/api/movie.service";
import { Hero } from "@/widgets/hero";
import { Metadata, NextPage } from "next";

export const getMovies = async () => {
  const { data } = await movieService.getById(5079093);
  return data;
};

export const metadata: Metadata = {
  description: "Смотреть онлайн сериалы Disney",
  title: "Disney - Сериалы",
};

export const Page: NextPage = async () => {
  const movie = await getMovies();
  console.log(movie?.seasonsInfo);
  return <Hero movie={movie} />;
};

export default Page;
