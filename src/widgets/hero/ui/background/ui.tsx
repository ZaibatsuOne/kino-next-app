import { FC } from "react";

export const Background: FC = ({ movie }) => {
  const firstVideo = movie?.videos?.trailers[3];
  const firstVideoUrl = firstVideo?.url;
  const splitUrl = firstVideoUrl?.split("/");
  const playList = splitUrl[splitUrl.length - 1];
  return (
    <div className="relative h-[700px] -top-36 w-full object-cover overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-[800px] scale-150"
        src={`${firstVideoUrl}?autoplay=1&loop=1&mute=1&playlist=${playList}&vq=hd1080`}
      />
      ​
    </div>
  );
};
