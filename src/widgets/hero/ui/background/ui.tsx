import { FC } from "react";
import Image from "next/image";
import { monsterWorkBg } from "@/shared/ui/icon/assets";
import { moovieBgCover } from "@/shared/ui/icon/assets";

export const Background: FC = () => {
  return (
    <Image
      priority
      quality={100}
      fill
      sizes="100%"
      src={moovieBgCover}
      alt="top day moovie"
      className="absolute  -z-10"
      objectFit="cover"
    />
  );
};
