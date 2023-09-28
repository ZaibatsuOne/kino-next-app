"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui";
import { MovieDtoV13, Video } from "@openmoviedb/kinopoiskdev_client";
import { Play } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  movie: MovieDtoV13 | null;
}
export const WatchFilmButton: FC<Props> = (props) => {
  const { movie } = props;
  const pathname = usePathname();

  const pathanameIncludes = pathname?.includes("/movie");
  const firstVideo: undefined | Video = movie?.videos?.trailers?.[3];
  const firstVideoUrl: string | undefined = firstVideo?.url;
  const splitUrl = firstVideoUrl?.split("/");
  const playList = splitUrl[splitUrl.length - 1];

  const checkPathname = () => {
    if (pathanameIncludes) {
      return (
        <Dialog>
          <DialogTrigger className="flex gap-1 items-center bg-white border border-white text-black font-bold rounded-lg h-10 px-4 py-2">
            <Play />
            <span>Смотреть</span>
          </DialogTrigger>
          <DialogContent className="max-w-7xl h-[80%] p-7" close={true}>
            <DialogHeader>
              <DialogTitle className="font-bold text-2xl">
                {movie?.name}
              </DialogTitle>
              <DialogDescription className="h-full w-full bg-black rounded-3xl">
                <iframe
                  className="w-full h-full rounded-2xl"
                  src={`${firstVideoUrl}?autoplay=1&loop=1&mute=1&playlist=${playList}&vq=hd1080&showinfo=0&modestbranding=1$rel=0`}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    } else {
      return (
        <Link href={`/movie/${movie?.id}`}>
          <Button className="gap-1" variant="secondary">
            <Play />
            <span>Смотреть</span>
          </Button>
        </Link>
      );
    }
  };
  return checkPathname();
};
