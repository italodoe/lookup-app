export const env = (varname: string) => {
  const value = process.env[varname];
  if (value === undefined) {
    throw new Error(`Missing env variable. '${varname}' is ${value} :|`);
  }
  return value;
};
