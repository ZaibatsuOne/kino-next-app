import { kp } from "@/shared/api/baseApi";

import {
  queryAnimationSerials,
  queryNewSerials,
  queryPopularSerials,
  queryRusSerials,
} from "./querySetting";

//Получить сериал по ID
export const getSeriesById = async (id: number) => {
  const { data, error } = await kp.movie.getById(id);
  if (error) {
    throw new Error("Не удалось получить сериалы");
  }
  return data;
};

//Новые сериалы
export const getNewSeries = async () => {
  const { data, error } = await kp.movie.getByFilters(queryNewSerials);
  if (error) {
    throw new Error("Не удалось получить сериалы");
  }
  return data;
};

//Популярные сериалы
export const getPopularSeries = async () => {
  const { data, error } = await kp.movie.getByFilters(queryPopularSerials);
  if (error) {
    throw new Error("Не удалось получить сериалы");
  }
  return data;
};

//Русские сериалы
export const getRussianSeries = async () => {
  const { data, error } = await kp.movie.getByFilters(queryRusSerials);
  if (error) {
    throw new Error("Не удалось получить сериалы");
  }
  return data;
};

//Мультфтльмы - анимационные сериалы
export const getAnimationSerials = async () => {
  const { data, error } = await kp.movie.getByFilters(queryAnimationSerials);
  if (error) {
    throw new Error("Не удалось получить сериалы");
  }
  return data;
};
