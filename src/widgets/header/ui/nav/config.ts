import { paths } from "@/shared/routing";
import { Film, Home, Star, Tv } from "lucide-react";

export const items = [
  {
    href: paths.home,
    icon: Home,
    text: "Главная",
  },
  {
    href: paths.series,
    icon: Tv,
    text: "Сериалы",
  },
  {
    href: paths.films,
    icon: Film,
    text: "Фильмы",
  },
  {
    href: paths.originals,
    icon: Star,
    text: "Оригинальное",
  },
];
