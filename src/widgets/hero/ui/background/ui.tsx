import { FC } from "react";
import Image from "next/image";

export const Background: FC = ({ movie }) => {
  const firstVideo = movie?.videos?.trailers[3];
  const firstVideoUrl = firstVideo?.url;

  const checkMovie = (firstVideoUrl, movie) => {
    if (firstVideoUrl) {
      const splitUrl = firstVideoUrl?.split("/");
      const playList = splitUrl[splitUrl.length - 1];
      return (
        <iframe
          className="absolute inset-0 w-full h-[800px] scale-150"
          src={`${firstVideoUrl}?autoplay=1&loop=1&mute=1&playlist=${playList}&vq=hd1080&showinfo=0&modestbranding=1$rel=0`}
        />
      );
    } else {
      return (
        <Image
          src={movie?.backdrop?.url}
          alt={movie?.name}
          objectFit="cover"
          fill
          priority
          quality={100}
        />
      );
    }
  };

  return (
    <div className="relative h-[700px] -top-36 w-full object-cover overflow-hidden">
      {checkMovie(firstVideoUrl, movie)}
    </div>
  );
};
