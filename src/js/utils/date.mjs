// Date converter function
export function dateConverter(date) {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-GB").slice(0, 17);
}
