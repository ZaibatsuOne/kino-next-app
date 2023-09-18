import { getSeriesById } from "@/shared/api/series.service";
import { Hero } from "@/widgets/hero";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  description: "Смотреть онлайн сериалы Disney",
  title: "Disney - Сериалы",
};

export const Page: NextPage = async () => {
  const movie: MovieDtoV13 | null = await getSeriesById(571335);
  return <Hero movie={movie} />;
};

export default Page;
