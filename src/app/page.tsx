import { HomePage } from "@/pages/main-page";
import { getMovieById } from "@/shared/api";

export default async function Home() {
  const movie = await getMovieById(1112702);
  return <HomePage movie={movie} />;
}
