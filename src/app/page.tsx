import { HomePage } from "@/pages/main-page";
import movieService from "@/shared/api/movie.service";

export const getFilm = async () => {
  const { data } = await movieService.getById(111543);
  return data;
};
export default async function Home() {
  const movie = await getFilm();
  return <HomePage movie={movie} />;
}
