import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import Image from "next/image";

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
            alt="Movie poster"
            fill
            objectFit="cover"
            priority
            quality={100}
            src={movie?.backdrop?.url}
          />
        ) : (
          <span>Forbidden</span>
        )}
      </>
    );
  }
};
