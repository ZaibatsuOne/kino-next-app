import { KinopoiskDev } from "@openmoviedb/kinopoiskdev_client";

const BASE_URL = process.env.KINOPOISK_API as string;
export const kp = new KinopoiskDev(BASE_URL);
