import { kp } from "./baseApi";

//Получение фильма по ID
export const getMovieById = async (id: number) => {
  const { data, error } = await kp.movie.getById(id);
  if (error) {
    throw new Error("Ошибка в получении фильма");
  }
  return data;
};
