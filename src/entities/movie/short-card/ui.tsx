import { Card } from "@/shared/ui";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { manda } from "@/shared/ui/icon/assets";

export const MovieShortCard: FC = () => {
  return (
    <Link href="#">
      <Card className="w-60 h-32 overflow-hidden border-[#353843] bg-black">
        <Image src={manda} alt="" />
      </Card>
    </Link>
  );
};
