import { Card } from "@/shared/ui";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { manda } from "@/shared/ui/icon/assets";

export const MovieShortCard: FC = (props) => {
  const { movie } = props;
  return (
    <Link href="#">
      <Card className="w-60 h-32 overflow-hidden border-[#353843] bg-black">
        {movie ? (
          <Image
            src={movie.poster.url}
            width={400}
            height={200}
            priority
            alt=""
            className="object-cover w-full h-full"
          />
        ) : (
          <span>Forbidden</span>
        )}
      </Card>
    </Link>
  );
};
