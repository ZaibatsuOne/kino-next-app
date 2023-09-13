import { FC } from "react";
import Image from "next/image";
import { searchIcon } from "@/shared/ui/icon/assets";

export const SearchButton = () => {
  return (
    <button className="flex gap-2 items-center">
      <Image src={searchIcon} alt="search button" />
      <span>Поиск</span>
    </button>
  );
};
