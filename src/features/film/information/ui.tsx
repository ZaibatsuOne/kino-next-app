import {
  MovieAgeRating,
  MovieCountry,
  MovieLength,
  MovieYear,
} from "@/shared/lib";
import {
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
import { Info } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface Props {
  movie: MovieDtoV13;
}
export const InformationFilmButton: FC<Props> = ({ movie }) => {
  const { backdrop } = movie;
  return (
    <Dialog>
      <DialogTrigger className="flex gap-1 items-center bg-none border border-white text-white font-bold rounded-lg h-10 px-4 py-2">
        <Info />
        <span>Информация о фильме</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-6">
          <Image
            alt="movie poster"
            className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-2xl"
            height={400}
            src={backdrop.url}
            width={400}
          />
          <DialogTitle>{movie?.name}</DialogTitle>
          <DialogDescription>{movie?.description}</DialogDescription>
          <Separator />
          <DialogFooter className="flex items-center gap-2">
            {MovieAgeRating(movie)}
            {MovieYear(movie)}
            {MovieCountry(movie)}
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
