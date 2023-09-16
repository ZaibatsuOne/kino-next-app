"use client";

import { cn } from "@/shared/lib/utils";
import { NavLink } from "@/shared/ui";
import { usePathname } from "next/navigation";
import { FC } from "react";

import { items } from ".";

export const Navigation: FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex">
        {items.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.text}>
              <NavLink
                className={cn(
                  "py-3 px-4",
                  isActive ? "text-cyan-300" : "text-white"
                )}
                href={item.href}
              >
                <item.icon className="w-5 h-5" />
                <span className="pt-1">{item.text}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
