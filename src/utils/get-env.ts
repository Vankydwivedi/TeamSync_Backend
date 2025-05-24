import dotenv from 'dotenv';
dotenv.config();

export const getEnv = (key: string, defaultValue: string = ""): string => {
  
  const value = process.env[key];
  console.log(value);
  
  if (value === undefined) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`Enviroment variable ${key} is not set`);
  }
  return value;
};
