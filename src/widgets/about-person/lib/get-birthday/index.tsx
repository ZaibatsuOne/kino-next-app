import dayjs from "dayjs";
import "dayjs/locale/ru";

export const getBirthday = (birthday: string | undefined) => {
  dayjs.locale("ru");
  if (!birthday) return null;

  return dayjs(birthday).format("D MMMM YYYY");
};
