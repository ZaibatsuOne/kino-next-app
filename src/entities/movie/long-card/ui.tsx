import { FC } from "react";
import Image from "next/image";

export const MovieLongCard: FC = (props) => {
  const { serial } = props;
  return (
    <article className="w-full border border-[#353843] object-cover rounded-lg h-[351px] bg-[#40464E] overflow-hidden">
      {serial?.poster?.url ? (
        <Image
          src={serial.poster.url}
          width={400}
          height={600}
          alt=""
          className="object-cover h-full"
        />
      ) : (
        <span>fdf</span>
      )}
    </article>
  );
};
