import { Background } from "./ui/background";
import { Description } from "./ui/description";
import { FC } from "react";
import Image from "next/image";
import { InformationFilmButton } from "@/features/film/information/ui";
import { WatchFilmButton } from "@/features/film/watch/ui";
import { movieName } from "@/shared/ui/icon/assets";

export const Hero: FC = () => {
  return (
    <section className="relative">
      <div className="absolute z-10 bottom-0 -top-28 h-[800px] inset-0">
        <div className="absolute w-full h-20 bg-gradient-to-b from-gray-800 to-transparent" />
        <div className="absolute w-full h-[650px] bg-gradient-to-tr bottom-0 from-[#1A1D29] via-transparent to-transparent " />
        <div className="absolute w-full h-[800px] bg-gradient-to-t bottom-0 from-[#1A1D29] to-transparent" />
      </div>
      <Background />
      <div className="container">
        <div className=" absolute flex flex-col gap-8 z-10 top-1/4 w-1/2">
          <div className="flex flex-col gap-5">
            <Image src={movieName} alt="" />
            <Description />
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
