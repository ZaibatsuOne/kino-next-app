"use client";

import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Hover } from "../hover";

interface Props {
  movie: MovieDtoV13;
}
export const MovieLongCard: FC<Props> = (props) => {
  const { movie } = props;

  return (
    <Link href="#">
      <motion.div className="relative group" whileHover={{ scale: 1.07 }}>
        <Hover movie={movie} />
        <article
          className="w-full border border-[#353843] object-cover 
          rounded-lg h-[351px] bg-[#40464E] overflow-hidden"
        >
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
      </motion.div>
    </Link>
  );
};
