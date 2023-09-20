import { MovieDocsResponseDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { ReactNode } from "react";

export interface ICategoryCarousel {
  children: ReactNode;
  className?: string;
  item?: any;
}

export interface ICategoryList {
  movies: MovieDocsResponseDtoV13;
  type: "long-card" | "short-card";
}
