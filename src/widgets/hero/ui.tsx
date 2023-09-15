import { Background } from "./ui/background";
import { Description } from "./ui/description";
import { FC } from "react";
import Image from "next/image";
import { InformationFilmButton } from "@/features/film/information/ui";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { WatchFilmButton } from "@/features/film/watch/ui";

interface Props {
  movie: MovieDtoV13 | null;
}
export const Hero: FC<Props> = ({ movie }) => {
  const movieLogo: string | undefined = movie?.logo?.url;
  return (
    <section className="relative -mb-10">
      <div className="absolute z-10 -top-28 h-[700px] inset-0">
        <div className="absolute w-full h-20 bg-gradient-to-b from-gray-800 to-transparent" />
        <div className="absolute w-full h-[650px] bg-gradient-to-tr bottom-0 from-[#1A1D29] via-transparent to-transparent " />
        <div className="absolute w-full h-[800px] bg-gradient-to-t bottom-0 from-[#1A1D29] to-transparent" />
        <div className="absolute w-full h-[800px] bg-gradient-to-t bottom-0 from-[#1A1D29] to-transparent" />
      </div>
      <Background movie={movie} />
      <div className="container">
        <div className=" absolute flex flex-col gap-8 z-10 bottom-[20%] w-1/2">
          <div className="flex flex-col gap-5">
            {movieLogo ? (
              <Image src={movieLogo} alt="" width={500} height={200} />
            ) : (
              <span>Forbidden</span>
            )}
            <Description movie={movie} />
          </div>
          <div className="flex gap-6">
            <WatchFilmButton />
            <InformationFilmButton />
          </div>
        </div>
      </div>
    </section>
  );
};
