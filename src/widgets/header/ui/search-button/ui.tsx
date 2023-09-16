import { searchIcon } from "@/shared/ui/icon/assets";
import Image from "next/image";
import { FC } from "react";

export const SearchButton: FC = () => {
  return (
    <button className="flex gap-2 items-center">
      <Image alt="search button" src={searchIcon} />
      <span>Поиск</span>
    </button>
  );
};
