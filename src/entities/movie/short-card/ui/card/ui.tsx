"use client";
import { LinkedMovie, MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Hover } from "../hover";

interface Props {
  movie: MovieDtoV13;
}
export const MovieShortCard: FC<Props> = (props) => {
  const { movie } = props;

  return (
    <Link href={`/movie/${movie.id}`}>
      <motion.div className="relative h-40 group " whileHover={{ scale: 1.07 }}>
        <Hover movie={movie} />
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
      </motion.div>
    </Link>
  );
};
