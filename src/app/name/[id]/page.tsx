import { kp } from "@/shared/api/baseApi";
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
    <Image src={actor?.photo} alt={actor?.name} width={100} height={100} />
  );
};

export default Name;
