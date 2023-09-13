import { Button } from "@/shared/ui";
import { FC } from "react";
import { Play } from "lucide-react";
export const WatchFilmButton: FC = () => {
  return (
    <Button variant="secondary" className="gap-1">
      <Play />
      <span>Смотреть</span>
    </Button>
  );
};
