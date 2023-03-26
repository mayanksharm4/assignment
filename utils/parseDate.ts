export const parseDate = (dateString: string) => {
  if (!dateString) return null;

  const date = new Date(dateString);

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }, ${date.getHours()}:${
    date.getMinutes() < 10 ? "0" : ""
  }${date.getMinutes()}`;

  return formattedDate;
};
