import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../icon/assets";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="logo" />
    </Link>
  );
};
