export const sortByDate = (date1: string, date2: string) => {
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
