import { FC } from "react";
import { Metadata } from "next";
import { SeriesPage } from "@/pages/series-page";
import { kp } from "@/shared/api/baseApi";
import movieService from "@/shared/api/movie.service";
import { queryPopularSerials } from "@/shared/api";

export const getMovies = async () => {
  const { data } = await movieService.getById(404900);
  return data;
};

export const getPopularSerials = async () => {
  const { data } = await kp.movie.getByFilters(queryPopularSerials);
  return data;
};
export const metadata: Metadata = {
  title: "Disney - Сериалы",
  description: "Смотреть онлайн сериалы Disney",
};

export const Page: FC = async () => {
  const movie = await getMovies();
  const popularSerials = await getPopularSerials();
  console.log(popularSerials);
  return <SeriesPage movie={movie} popularSerials={popularSerials} />;
};

export default Page;
