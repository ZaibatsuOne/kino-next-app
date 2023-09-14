import { Category, CategoryCarousel, CategoryTitle } from "@/widgets/category";

import { FC } from "react";
import { MovieShortCard } from "@/entities/movie";

export const RussianSerials: FC = (props) => {
  const { rusSerials } = props;
  return (
    <Category>
      <CategoryTitle>Российские сериалы</CategoryTitle>
      <CategoryCarousel>
        {rusSerials?.docs?.map((item) => (
          <MovieShortCard movie={item} />
        ))}
      </CategoryCarousel>
    </Category>
  );
};
