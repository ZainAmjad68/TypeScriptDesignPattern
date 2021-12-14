export const stringToDate = (dateString: string): Date => {
  let dateParts = dateString.split("/").map((value): number => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
