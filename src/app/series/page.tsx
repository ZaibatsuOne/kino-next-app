import { FC } from "react";
import { Metadata } from "next";
import { SeriesPage } from "@/pages/series-page";

export const metadata: Metadata = {
  title: "Disney - Сериалы",
  description: "Смотреть онлайн сериалы Disney",
};
export const Page: FC = () => {
  return <SeriesPage />;
};

export default Page;
