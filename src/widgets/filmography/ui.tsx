"use client";
import { Button, Title } from "@/shared/ui";
import { MovieInPerson } from "@openmoviedb/kinopoiskdev_client";
import { FC, useState } from "react";

import { FilmographyList } from "./lib";

interface Props {
  movies: MovieInPerson[] | undefined;
}

export const Filmography: FC<Props> = ({ movies }) => {
  const [limit, setLimit] = useState<number>(10);
  if (!movies) return null;
  const moviesList = movies.slice(0, limit);
  const hasMore = movies.length > limit;

  return (
    <section className="flex flex-col gap-5">
      <Title>Фильмография</Title>
      {FilmographyList(moviesList)}
      {hasMore ? (
        <Button onClick={(): void => setLimit((limit) => limit + 10)}>
          Показать еще
        </Button>
      ) : null}
    </section>
  );
};
