import { FC } from "react";
import Image from "next/image";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";

interface Props {
  movie: MovieDtoV13;
}
export const MovieLongCard: FC<Props> = (props) => {
  const { movie } = props;
  return (
    <article className="w-full border border-[#353843] object-cover rounded-lg h-[351px] bg-[#40464E] overflow-hidden">
      {movie?.poster?.url ? (
        <Image
          src={movie.poster.url}
          width={400}
          height={600}
          alt=""
          className="object-cover h-full"
        />
      ) : (
        <span>Forbidden</span>
      )}
    </article>
  );
};
