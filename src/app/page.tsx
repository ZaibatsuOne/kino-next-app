import { HomePage } from "@/pages/main-page";
import { getMovieById } from "@/shared/api";

export default async function Home() {
  const movie = await getMovieById(4716622);
  return <HomePage movie={movie} />;
}
