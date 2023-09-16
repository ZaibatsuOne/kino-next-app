import { SeriesPage } from "@/pages/series-page";
import { queryPopularSerials } from "@/shared/api";
import { kp } from "@/shared/api/baseApi";
import movieService from "@/shared/api/movie.service";
import { queryNewSerials, queryRusSerials } from "@/shared/api/querySetting";
import { Metadata } from "next";
import { FC } from "react";

export const getRussianSerials = async () => {
  const { data } = await kp.movie.getByFilters(queryRusSerials);
  return data;
};

export const getMovies = async () => {
  const { data } = await movieService.getById(464963);
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
  description: "Смотреть онлайн сериалы Disney",
  title: "Disney - Сериалы",
};

export const Page: FC = async () => {
  const movie = await getMovies();
  const popularSerials = await getPopularSerials();
  const rusSerials = await getRussianSerials();
  const newSerials = await getNewSerials();

  return (
    <SeriesPage
      movie={movie}
      newSerials={newSerials}
      popularSerials={popularSerials}
      rusSerials={rusSerials}
    />
  );
};

export default Page;
