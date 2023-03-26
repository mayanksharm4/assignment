import { compareDesc, parseISO } from "date-fns";

export const sortByDate = (date1: string, date2: string) => {
  if (!date1 || !date2) return 0;

  return compareDesc(parseISO(date1), parseISO(date2));
};
