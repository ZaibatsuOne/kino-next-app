import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import Image from "next/image";
import { FC } from "react";

interface Props {
  movie: MovieDtoV13;
}
export const MovieLongCard: FC<Props> = (props) => {
  const { movie } = props;
  return (
    <article className="w-full border border-[#353843] object-cover rounded-lg h-[351px] bg-[#40464E] overflow-hidden">
      {movie?.poster?.url ? (
        <Image
          alt=""
          className="object-cover h-full"
          height={600}
          src={movie.poster.url}
          width={400}
        />
      ) : (
        <span>Forbidden</span>
      )}
    </article>
  );
};
