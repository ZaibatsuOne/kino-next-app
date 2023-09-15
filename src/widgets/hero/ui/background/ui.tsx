import { IMoviePreview, IMovieTrailers } from "@/shared/config/types";
import { MovieDtoV13, Video } from "@openmoviedb/kinopoiskdev_client";

import { FC } from "react";
import Image from "next/image";

interface Props {
  movie: MovieDtoV13 | null;
}
export const Background: FC<Props> = (props) => {
  const { movie } = props;

  const firstVideo: Video | undefined =
    movie?.videos?.trailers?.[1] ||
    movie?.videos?.trailers?.[2] ||
    movie?.videos?.trailers?.[3] ||
    movie?.videos?.trailers?.[4];

  const firstVideoUrl: string | undefined = firstVideo?.url;

  const checkMovie = (firstVideoUrl: string, movie: MovieDtoV13) => {
    if (firstVideoUrl) {
      const splitUrl = firstVideoUrl?.split("/");
      const playList = splitUrl[splitUrl.length - 1];
      return (
        <iframe
          className="absolute -z-20 inset-0 w-full h-[800px] scale-150"
          src={`${firstVideoUrl}?autoplay=1&loop=1&mute=1&playlist=${playList}&vq=hd1080&showinfo=0&modestbranding=1$rel=0`}
        />
      );
    } else {
      return (
        <>
          {movie?.backdrop?.url ? (
            <Image
              src={movie?.backdrop?.url}
              alt="Movie poster"
              objectFit="cover"
              fill
              priority
              quality={100}
            />
          ) : (
            <span>Forbidden</span>
          )}
        </>
      );
    }
  };

  return (
    <div className="relative h-[700px] -top-36 w-full object-cover overflow-hidden">
      {checkMovie(firstVideoUrl as string, movie as MovieDtoV13)}
    </div>
  );
};
