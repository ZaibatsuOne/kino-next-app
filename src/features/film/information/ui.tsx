import { Button } from "@/shared/ui";
import { Info } from "lucide-react";
import { FC } from "react";

export const InformationFilmButton: FC = () => {
  return (
    <Button className="gap-1" variant="ghost">
      <Info />
      <span>Информация о фильме</span>
    </Button>
  );
};
