import { MovieDtoV13, Video } from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";

import { checkMovie } from ".";

interface Props {
  movie: MovieDtoV13 | null;
}
export const Background: FC<Props> = (props) => {
  const { movie } = props;

  const firstVideo: undefined | Video = movie?.videos?.trailers?.[3];
  const firstVideoUrl: string | undefined = firstVideo?.url;

  return (
    <div className="relative h-[700px] -top-36 w-full object-cover overflow-hidden">
      {checkMovie(firstVideoUrl as string, movie as MovieDtoV13)}
    </div>
  );
};
