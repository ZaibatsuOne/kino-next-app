import { Title } from "@/shared/ui";
import { Person } from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";

import { getBirthday, getBirthplace, getGrowth, getProfession } from "../lib";

interface Props {
  actor: null | Person;
}
export const AboutPerson: FC<Props> = ({ actor }) => {
  if (!actor) return null;
  const characteristics = [
    {
      param: getProfession(actor?.profession),
      title: "Профессия:",
    },
    {
      param: getGrowth(actor?.growth),
      title: "Рост:",
    },
    {
      param: getBirthday(actor?.birthday),
      title: "Дата рождения:",
    },
    {
      param: getBirthplace(actor?.birthPlace),
      title: "Место рождения:",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <Title>О персоне</Title>
      <div>
        {characteristics.map((item) => (
          <div className="flex justify-between" key={item.title}>
            <span className="w-full">{item.title}</span>
            <span className="w-full">{item.param}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
