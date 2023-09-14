import { Card } from "@/shared/ui";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const MovieShortCard: FC = (props) => {
  const { movie } = props;
  return (
    // <Link href="#">
    <Card className="w-full h-40 overflow-hidden border-[#353843] bg-black">
      {movie ? (
        <Image
          src={movie.poster.url}
          width={400}
          height={200}
          priority
          alt=""
          className="h-full w-full object-cover"
        />
      ) : (
        <span>Forbidden</span>
      )}
    </Card>
    // </Link>
  );
};
