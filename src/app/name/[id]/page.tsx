import { getActor } from "@/shared/api";
import { UndefinedPerson } from "@/shared/ui/icon/assets";
import { AboutPerson } from "@/widgets/about-person";
import { Filmography } from "@/widgets/filmography";
import { Metadata, NextPage } from "next";
import Image from "next/image";

interface Props {
  params: { id: number };
}

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { params } = props;
  const actor = await getActor(params.id);
  return {
    title: "Disney - " + actor?.name,
  };
};

const Name: NextPage<Props> = async (props) => {
  const { params } = props;
  const actor = await getActor(params.id);

  return (
    <section className="container w-full mt-16">
      <div className="flex gap-10">
        {actor?.photo && actor?.name ? (
          <Image
            alt={actor?.name}
            className="rounded-full w-64 h-64 object-cover"
            height={600}
            src={actor?.photo}
            width={600}
          />
        ) : (
          <Image
            alt=""
            className="rounded-full w-64 h-64 object-cover"
            height={600}
            src={UndefinedPerson}
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
