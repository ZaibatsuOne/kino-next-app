import { queryNewSerials, queryRusSerials } from "@/shared/api/querySetting";

import { FC } from "react";
import { Metadata } from "next";
import { SeriesPage } from "@/pages/series-page";
import { kp } from "@/shared/api/baseApi";
import movieService from "@/shared/api/movie.service";
import { queryPopularSerials } from "@/shared/api";

export const getRussianSerials = async () => {
  const { data } = await kp.movie.getByFilters(queryRusSerials);
  return data;
};

export const getMovies = async () => {
  const { data } = await movieService.getById(478052);
  return data;
};

export const getPopularSerials = async () => {
  const { data } = await kp.movie.getByFilters(queryPopularSerials);
  return data;
};

export const getNewSerials = async () => {
  const { data } = await kp.movie.getByFilters(queryNewSerials);
  return data;
};
export const metadata: Metadata = {
  title: "Disney - Сериалы",
  description: "Смотреть онлайн сериалы Disney",
};

export const Page: FC = async () => {
  const movie = await getMovies();
  const popularSerials = await getPopularSerials();
  const rusSerials = await getRussianSerials();
  const newSerials = await getNewSerials();

  console.log(newSerials);
  return (
    <SeriesPage
      movie={movie}
      popularSerials={popularSerials}
      rusSerials={rusSerials}
      newSerials={newSerials}
    />
  );
};

export default Page;
