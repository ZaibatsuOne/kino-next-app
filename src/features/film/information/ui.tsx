import { MovieAgeRating, MovieCountry, MovieYear } from "@/shared/lib";
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
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
          {backdrop?.url ? (
            <Image
              alt="movie poster"
              className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-2xl -z-10"
              height={400}
              src={backdrop.url}
              unselectable="on"
              width={400}
            />
          ) : null}
          <DialogTitle>{movie?.name}</DialogTitle>
          <DialogDescription>{movie?.description}</DialogDescription>
          <Separator />
          <DialogFooter className="flex items-center justify-between">
            <Link href={`/movie/${movie.id}`}>
              <Button size="sm" variant="ghost">
                Перейти к просмотру
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              {MovieAgeRating(movie)}
              {MovieYear(movie)}
              {MovieCountry(movie)}
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
