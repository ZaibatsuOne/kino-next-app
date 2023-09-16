import { NavLink } from "@/shared/ui";
import Image from "next/image";
import { FC } from "react";

import { items } from ".";

export const Navigation: FC = () => {
  return (
    <nav>
      <ul className="flex">
        {items.map((item) => (
          <li key={item.text}>
            <NavLink className="py-3 px-4" href={item.href}>
              <Image alt={item.text} src={item.icon} />
              <span className="pt-1">{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
