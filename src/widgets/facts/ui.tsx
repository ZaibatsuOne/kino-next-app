"use client";

import { Fact } from "@/entities/fact";
import { Separator } from "@/shared/ui";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { ChevronDown, ChevronUp, HelpCircle, ScrollText } from "lucide-react";
import { FC, useState } from "react";

import { Category, CategoryTitle } from "../category";

interface Props {
  movie: MovieDtoV13 | null;
}
export const Facts: FC<Props> = (props) => {
  const { movie } = props;
  const [openFacts, setOpenFacts] = useState<boolean>(false);
  return (
    <>
      {movie && movie?.facts.length > 0 ? (
        <Category className="container gap-6 ">
          <header className="flex items-center gap-5">
            <CategoryTitle>Знаете ли вы, что…</CategoryTitle>
            <span onClick={(): void => setOpenFacts(!openFacts)}>
              {openFacts ? <ChevronUp /> : <ChevronDown />}{" "}
            </span>
          </header>
          {openFacts ? (
            <ul className="flex flex-col gap-5">
              {movie?.facts.map((fact) => (
                <>
                  <Fact fact={fact.value} key={fact.value} />
                  <Separator />
                </>
              ))}
            </ul>
          ) : null}
          {!openFacts ? (
            <span className="text-gray-600 text-lg flex items-center gap-2">
              <ScrollText />
              <p>Тут собраны интересные факты</p>
            </span>
          ) : null}
        </Category>
      ) : null}
    </>
  );
};
