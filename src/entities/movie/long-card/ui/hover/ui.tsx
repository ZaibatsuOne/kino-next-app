"use client";

import { MovieAgeRating } from "@/shared/lib";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FC } from "react";

interface Props {
  movie: MovieDtoV13;
}
export const Hover: FC<Props> = (props) => {
  const { movie } = props;
  const movieRating = String(movie?.rating?.kp).slice(0, 3);

  return (
    <motion.div
      className="absolute w-full h-full bg-black/80 p-3 py-5 rounded-lg"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ opacity: 1 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col gap-2 flex-grow">
          <h4 className="text-2xl font-bold leading-6">{movie.name}</h4>
          <p className="line-clamp-4 text-xs">{movie.shortDescription}</p>
        </div>

        <div className="flex justify-between items-center flex-grow-0">
          <div className="flex gap-2 items-center">
            <Star />
            <span className="font-bold text-xl">{movieRating}</span>
          </div>
          {MovieAgeRating(movie)}
        </div>
      </div>
    </motion.div>
  );
};
