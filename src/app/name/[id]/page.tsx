import { kp } from "@/shared/api/baseApi";
import { AboutPerson } from "@/widgets/about-person";
import { Filmography } from "@/widgets/filmography";
import { NextPage } from "next";
import Image from "next/image";

export const getActor = async (id: number) => {
  const { data } = await kp.person.getById(id);
  return data;
};

interface Props {
  params: { id: number };
}
const Name: NextPage<Props> = async (props) => {
  const { params } = props;
  const actor = await getActor(params.id);

  return (
    <section className="container w-full mt-16">
      <div className="flex gap-10">
        {actor?.photo && actor.name && (
          <Image
            alt={actor?.name}
            className="rounded-full w-64 h-64 object-cover"
            height={600}
            src={actor?.photo}
            width={600}
          />
        )}
        <div className="w-1/2 flex flex-col gap-10">
          <div>
            <h2 className="text-4xl font-bold">{actor?.name}</h2>
            <h4 className="text-2xl text-gray-500 font-bold">
              {actor?.enName}
            </h4>
          </div>
          <AboutPerson actor={actor} />
          <Filmography movies={actor?.movies} />
        </div>
      </div>
    </section>
  );
};

export default Name;
