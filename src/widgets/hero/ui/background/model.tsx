import Image from "next/image";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";

export const checkMovie = (firstVideoUrl: string, movie: MovieDtoV13) => {
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
