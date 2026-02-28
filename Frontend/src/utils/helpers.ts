export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};