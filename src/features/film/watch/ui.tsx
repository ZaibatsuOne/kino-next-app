import { Button } from "@/shared/ui";
import { Play } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface Props {
  link: number | undefined;
}
export const WatchFilmButton: FC<Props> = ({ link }) => {
  return (
    <Link href={`/movie/${link}`}>
      <Button className="gap-1" variant="secondary">
        <Play />
        <span>Смотреть</span>
      </Button>
    </Link>
  );
};
