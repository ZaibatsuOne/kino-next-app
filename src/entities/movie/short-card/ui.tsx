import { Card } from "@/shared/ui";
import { LinkedMovie, MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  movie: LinkedMovie | MovieDtoV13;
}
export const MovieShortCard: FC<Props> = (props) => {
  const { movie } = props;
  return (
    <Link href={`/movie/${movie.id}`}>
      <Card className="w-full h-40  border-[#353843] bg-black rounded-2xl">
        {movie?.poster?.url ? (
          <Image
            alt=""
            className="h-full w-full object-cover rounded-2xl"
            height={200}
            priority
            src={movie.poster.url}
            width={400}
          />
        ) : (
          <span>Forbidden</span>
        )}
      </Card>
    </Link>
  );
};
