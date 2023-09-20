import { PersonInMovie } from "@openmoviedb/kinopoiskdev_client";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  person: PersonInMovie;
}
export const Actor: FC<Props> = ({ person }) => {
  const { id, name, photo } = person;
  return (
    <Link href={`/name/${id}`}>
      <div className="flex flex-col gap-3 items-center text-center">
        {photo ? (
          <Image
            alt=""
            className="w-32 h-32 rounded-full object-cover"
            height={500}
            priority
            src={photo}
            width={500}
          />
        ) : null}
        <p className="text-sm">{name}</p>
      </div>
    </Link>
  );
};
