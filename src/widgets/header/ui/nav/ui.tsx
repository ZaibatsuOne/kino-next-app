import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { items } from ".";

export const Navigation: FC = () => {
  return (
    <nav>
      <ul className="flex">
        {items.map((item) => (
          <li key={item.text}>
            <Link
              href={item.href}
              className="flex items-center justify-center gap-2 font-medium py-3 px-4"
            >
              <Image src={item.icon} alt={item.text} />
              <span className="pt-1">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
