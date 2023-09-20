import { getAnimationSerials } from "@/shared/api";
import { AnimationSection } from "@/widgets/animation";

const Animation = async () => {
  const movies = await getAnimationSerials();
  console.log(movies);
  return <AnimationSection movies={movies} type="сериалы" />;
};

export default Animation;
