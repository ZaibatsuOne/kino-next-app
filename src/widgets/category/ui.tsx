"use client";
import { MovieLongCard } from "@/entities/movie";
import { MovieShortCard } from "@/entities/movie";
import { cn } from "@/shared/lib/utils";
import { Title, type TitleProps } from "@/shared/ui";
import { Carousel } from "@/shared/ui/carousel/ui";
import { FC, PropsWithChildren } from "react";
import { SwiperSlide } from "swiper/react";

import { ICategoryCarousel, ICategoryList } from "./config";

interface Props extends PropsWithChildren {
  className?: string;
}

export const Category: FC<Props> = ({ children, className }) => {
  return (
    <section className={cn("flex flex-col gap-2", className)}>
      {children}
    </section>
  );
};

export const CategoryCarousel: FC<ICategoryCarousel> = ({
  children,
  className,
  item,
}) => {
  return <Carousel shadow={true}>{children}</Carousel>;
};

export const CategoryTitle: FC<TitleProps> = ({ children, className }) => {
  return <Title className={cn("container", className)}>{children}</Title>;
};

// export const CategoryList: FC<ICategoryList> = ({ movies, type }) => {
//   if (type === "long-card") {
//     return (
//       <div>
//         {movies.docs.map((movie) => (
//           <SwiperSlide key={movie.id}>
//             <MovieLongCard movie={movie} />
//           </SwiperSlide>
//         ))}
//       </div>
//     );
//   } else {
//     return (
//       <>
//         {movies.docs.map((movie) => (
//           <SwiperSlide key={movie.id}>
//             <MovieShortCard movie={movie} />
//           </SwiperSlide>
//         ))}
//       </>
//     );
//   }
// };
