import { InformationFilmButton } from "@/features/film/information/ui";
import { WatchFilmButton } from "@/features/film/watch/ui";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import Image from "next/image";
import { FC } from "react";

import { Background } from "./ui/background";
import { Description } from "./ui/description";
import { Info } from "./ui/info";

interface Props {
  movie: MovieDtoV13 | null;
}
export const Hero: FC<Props> = ({ movie }) => {
  const movieLogo: string | undefined = movie?.logo?.url;
  return (
    <section className="relative -mb-10">
      <div className="absolute z-10 -top-28 h-[700px] inset-0">
        <div className="absolute w-full h-28 bg-gradient-to-b from-[#1A1D29] to-transparent" />
        <div className="absolute w-full h-28 bg-gradient-to-b from-[#1A1D29] to-transparent" />

        <div className="absolute w-full h-[650px] bg-gradient-to-tr bottom-0 from-[#1A1D29] via-transparent to-transparent " />
        <div className="absolute w-full h-[600px] bg-gradient-to-t bottom-0 from-[#1A1D29] to-transparent" />
        <div className="absolute w-full h-[600px] bg-gradient-to-t bottom-0 from-[#1A1D29] to-transparent" />
      </div>
      <Background movie={movie} />
      <div className="container">
        <div className=" absolute flex flex-col gap-10 z-10 bottom-[20%] w-[70%]">
          <div className="flex flex-col gap-4 items-start justify-start">
            {movieLogo ? (
              <Image
                alt="Movie logo"
                className="flex w-[25%] h-1/4 object-contain max-h-80 px-0 mx-0 items-start"
                height={100}
                src={movieLogo}
                width={500}
              />
            ) : (
              <h2 className="text-7xl font-extrabold">{movie?.name}</h2>
            )}
            <Info movie={movie} />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
              <WatchFilmButton movie={movie} />
              <InformationFilmButton movie={movie} />
            </div>
            <Description movie={movie} />
          </div>
        </div>
      </div>
    </section>
  );
};
