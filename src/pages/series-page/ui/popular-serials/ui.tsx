import { Category, CategoryTitle } from "@/widgets/category";

import { FC } from "react";
import { MovieLongCard } from "@/entities/movie";

export const PopularSerials: FC = (props) => {
  const { popularSerials } = props;
  return (
    <Category>
      <CategoryTitle>Популярные сериалы</CategoryTitle>
      <section className="grid grid-cols-5 gap-5">
        {popularSerials?.docs.map((serial) => (
          <MovieLongCard serial={serial} />
        ))}
      </section>
    </Category>
  );
};
