import {
  filmsIcon,
  homeIcon,
  originsIcon,
  seriesIcon,
} from "@/shared/ui/icon/assets";

import { paths } from "@/shared/routing";

export const items = [
  {
    icon: homeIcon,
    text: "Главная",
    href: paths.home,
  },
  {
    icon: seriesIcon,
    text: "Сериалы",
    href: paths.series,
  },
  {
    icon: filmsIcon,
    text: "Фильмы",
    href: paths.films,
  },
  {
    icon: originsIcon,
    text: "Оригинальное",
    href: paths.originals,
  },
];
