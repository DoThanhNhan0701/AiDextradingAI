export const elipseStringMiddle = (value: string, start = 5, end = 5) => {
  if (value.length <= start + end) return value;
  return `${value.slice(0, start)}...${value.slice(0 - end)}`;
};
