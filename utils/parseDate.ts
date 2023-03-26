import { format, parseISO } from "date-fns";

export const parseDate = (dateString: string) => {
  if (!dateString) return "";

  const parsedDate = parseISO(dateString);

  const formattedDate = format(parsedDate, "dd/MM, HH:mm");

  return formattedDate;
};
