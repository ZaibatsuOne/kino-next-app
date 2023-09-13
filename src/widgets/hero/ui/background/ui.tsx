import { FC } from "react";
import Image from "next/image";
import bgCover from "@/shared/ui/icon/assets/movies/monsterWork.png";
import { moovieBgCover } from "@/shared/ui/icon/assets";

export const Background: FC = () => {
  return (
    <div className="relative h-[800px] -top-28 w-full object-cover overflow-hidden">
      <Image
        priority
        quality={100}
        src={moovieBgCover}
        alt="top day movie"
        className=""
      />
    </div>
  );
};
