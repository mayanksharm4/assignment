export const sortByDate = (date1: string, date2: string) => {
  if (!date1 || !date2) return 0;

  const date1Date = new Date(date1);
  const date2Date = new Date(date2);

  if (date1Date > date2Date) {
    return -1;
  } else if (date1Date < date2Date) {
    return 1;
  } else {
    return 0;
  }
};
