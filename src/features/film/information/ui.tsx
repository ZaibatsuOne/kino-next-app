import { Button } from "@/shared/ui";
import { FC } from "react";
import { Info } from "lucide-react";

export const InformationFilmButton: FC = () => {
  return (
    <Button className="gap-1" variant="ghost">
      <Info />
      <span>Информация о фильме</span>
    </Button>
  );
};
