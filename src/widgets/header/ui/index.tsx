import { FC } from "react";
import { Logo } from "@/shared/ui/logo";
import { Navigation } from "./nav";
import { SearchButton } from "./search-button";

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex gap-6 items-center">
        <Logo />
        <Navigation />
      </div>
      <SearchButton />
    </header>
  );
};
