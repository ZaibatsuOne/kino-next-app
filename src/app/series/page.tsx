import movieService from "@/shared/api/movie.service";
import { Hero } from "@/widgets/hero";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { Metadata, NextPage } from "next";

export const getMovies = async () => {
  const { data } = await movieService.getById(79848);
  return data;
};

export const metadata: Metadata = {
  description: "Смотреть онлайн сериалы Disney",
  title: "Disney - Сериалы",
};

export const Page: NextPage = async () => {
  const movie: MovieDtoV13 | null = await getMovies();
  return <Hero movie={movie} />;
};

export default Page;
