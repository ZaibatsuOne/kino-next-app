import { Button } from "@/shared/ui";
import { Play } from "lucide-react";
import { FC } from "react";

export const WatchFilmButton: FC = () => {
  return (
    <Button className="gap-1" variant="secondary">
      <Play />
      <span>Смотреть</span>
    </Button>
  );
};
