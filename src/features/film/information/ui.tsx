import {
  MovieAgeRating,
  MovieCountry,
  MovieLength,
  MovieYear,
} from "@/shared/lib";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Separator,
} from "@/shared/ui";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { Info, Popcorn, Tv } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface Props {
  movie: MovieDtoV13 | null;
}
export const InformationFilmButton: FC<Props> = ({ movie }) => {
  const { backdrop, isSeries } = movie;
  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 items-center bg-none border border-white text-white font-bold rounded-lg h-10 px-4 py-2">
        <Info />
        <span>Информация о фильме</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col">
          <DialogTitle className="relative">
            <div className="absolute w-full h-80 bottom-0 bg-gradient-to-t from-[#1A1D29] to-transparent" />
            {backdrop?.url ? (
              <Image
                alt="Movie poster"
                className="w-full h-96 object-cover rounded-t-xl "
                height={600}
                src={backdrop?.url}
                width={400}
              />
            ) : null}
            <h2 className="absolute p-4 -bottom-6 text-3xl font-bold">
              {movie?.name ? movie.name : null}
            </h2>
          </DialogTitle>
          <DialogDescription className="flex flex-col gap-3 p-4">
            <div className="flex items-center gap-2 text-sm">
              <div>{isSeries ? <Popcorn /> : <Tv />}</div>
              {MovieAgeRating(movie)}
              {MovieYear(movie)}
              {MovieCountry(movie)}
              {MovieLength(movie)}
            </div>
            <div className="text-sm">{movie?.shortDescription}</div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
