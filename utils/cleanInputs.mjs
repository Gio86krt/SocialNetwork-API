export const cleanInput = (input) => {
  const regexp = /[<>?\/\\'`"*]/gi;
  const cleaned = input.replace(regexp, "").trim();
  return cleaned;
};
