import { Card } from "@/shared/ui";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";

interface Props {
  movie: MovieDtoV13;
}
export const MovieShortCard: FC<Props> = (props) => {
  const { movie } = props;
  return (
    // <Link href="#">
    <Card className="w-full h-40  border-[#353843] bg-black rounded-2xl">
      {movie?.poster?.url ? (
        <Image
          src={movie.poster.url}
          width={400}
          height={200}
          priority
          alt=""
          className="h-full w-full object-cover rounded-2xl"
        />
      ) : (
        <span>Forbidden</span>
      )}
    </Card>
    // </Link>
  );
};
