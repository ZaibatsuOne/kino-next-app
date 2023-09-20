import { Logo } from "@/shared/ui/logo";
import Link from "next/link";
import { FC } from "react";

import { footerList } from "./config";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="flex flex-col gap-10 items-center text-xs">
        <div className="container flex flex-col gap-9 items-center text-center">
          <Logo />
          <ul className="flex gap-5">
            {footerList.map((item) => (
              <li key={item.text}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <div className="w-1/2">
            <p>
              Disney+ — это услуга по подписке на контент, но его содержание
              является недоступным. Сервис Disney+ коммерциализирован компанией
              Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
            </p>
          </div>
        </div>
        <div>
          <p>© Дисней. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
