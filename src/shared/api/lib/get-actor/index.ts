import { kp } from "../../baseApi";

export const getActor = async (id: number) => {
  const { data } = await kp.person.getById(id);
  return data;
};
