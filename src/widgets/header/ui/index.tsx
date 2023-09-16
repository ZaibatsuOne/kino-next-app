import { Logo } from "@/shared/ui/logo";
import { FC } from "react";

import { Navigation } from "./nav/ui";
import { SearchButton } from "./search-button";

export const Header: FC = () => {
  return (
    <header className="container relative z-[11] flex items-center justify-between py-4">
      <div className="flex gap-6 items-center">
        <Logo />
        <Navigation />
      </div>
      <SearchButton />
    </header>
  );
};
