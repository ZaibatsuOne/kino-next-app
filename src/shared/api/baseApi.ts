import { KinopoiskDev } from "@openmoviedb/kinopoiskdev_client";

const BASE_API = process.env.KINOPOISK_API as string;

export const kp = new KinopoiskDev("RJ1PEFN-XBXM2VH-PSNR6X2-AK7Y6A3");
