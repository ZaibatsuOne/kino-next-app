import { Profession } from "@openmoviedb/kinopoiskdev_client";

export const getProfession = (profession: Profession[] | undefined) => {
  if (!profession) return <span>-</span>;
  return (
    <>
      {profession?.map((item: Profession) => (
        <span key={item.value}>{item.value} </span>
      ))}
    </>
  );
};
