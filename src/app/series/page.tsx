import { FC } from "react";
import { Metadata } from "next";
import { SeriesPage } from "@/pages/series-page";
import movieService from "@/shared/api/movie.service";

export const getMovies = async () => {
  const { data } = await movieService.getById(1395801);
  return data;
};

export const metadata: Metadata = {
  title: "Disney - Сериалы",
  description: "Смотреть онлайн сериалы Disney",
};

export const Page: FC = async () => {
  const movie = await getMovies();
  console.log(movie);
  return <SeriesPage movie={movie} />;
};

export default Page;
