import { paths } from "@/shared/routing";
import {
  filmsIcon,
  homeIcon,
  originsIcon,
  seriesIcon,
} from "@/shared/ui/icon/assets";

export const items = [
  {
    href: paths.home,
    icon: homeIcon,
    text: "Главная",
  },
  {
    href: paths.series,
    icon: seriesIcon,
    text: "Сериалы",
  },
  {
    href: paths.films,
    icon: filmsIcon,
    text: "Фильмы",
  },
  {
    href: paths.originals,
    icon: originsIcon,
    text: "Оригинальное",
  },
];
