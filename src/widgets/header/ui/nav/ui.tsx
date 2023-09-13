import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "@/shared/ui";
import { items } from ".";

export const Navigation: FC = () => {
  return (
    <nav>
      <ul className="flex">
        {items.map((item) => (
          <li key={item.text}>
            <NavLink href={item.href} className="py-3 px-4">
              <Image src={item.icon} alt={item.text} />
              <span className="pt-1">{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
