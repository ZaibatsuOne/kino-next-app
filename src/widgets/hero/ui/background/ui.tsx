import { FC } from "react";
import Image from "next/image";
import bgCover from "@/shared/ui/icon/assets/movies/monsterWork.png";
import { moovieBgCover } from "@/shared/ui/icon/assets";

export const Background: FC = ({ movie }) => {
  const firstVideo = movie?.videos?.trailers[3];
  const firstVideoUrl = firstVideo?.url;

  return (
    <div className="relative h-[800px] -top-36 w-full object-cover overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`${firstVideoUrl}?autoplay=1&loop=1&mute=1&playlist=ixFvGn-WOBo`}
      />
      ​
    </div>
  );
};
