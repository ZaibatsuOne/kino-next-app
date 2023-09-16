import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { logo } from "../icon/assets";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <Image alt="logo" src={logo} />
    </Link>
  );
};
