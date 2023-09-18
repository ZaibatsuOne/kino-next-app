import { HomePage } from "@/pages/main-page";
import { getMovieById } from "@/shared/api";

export default async function Home() {
  const movie = await getMovieById(111543);
  console.log(movie?.similarMovies);
  return <HomePage movie={movie} />;
}
