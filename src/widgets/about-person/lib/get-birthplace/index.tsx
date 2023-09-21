import { BirthPlace } from "@openmoviedb/kinopoiskdev_client";

export const getBirthplace = (birthPlace: BirthPlace[] | undefined) => {
  if (!birthPlace) return <span>-</span>;
  return (
    <>
      {birthPlace.map((item: BirthPlace) => (
        <span key={item.value}>{item.value} </span>
      ))}
    </>
  );
};
