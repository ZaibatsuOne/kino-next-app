"use client";
import { Actor } from "@/entities/actor";
import { Carousel } from "@/shared/ui/carousel/ui";
import { MovieDtoV13 } from "@openmoviedb/kinopoiskdev_client";
import { FC } from "react";
import { SwiperSlide } from "swiper/react";

interface Props {
  movie: MovieDtoV13;
}
export const ActorsList: FC<Props> = ({ movie }) => {
  const { persons } = movie;

  const actors = persons?.filter((person) => person.profession === "актеры");
  return (
    <section className="container ">
      <Carousel className=" " count={8} slidesButtons={false}>
        {actors?.map((person) => (
          <SwiperSlide key={person.name}>
            <Actor person={person} />
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
};
