import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";
dotenv.config();

const rounds = parseInt(process.env.ROUNDS);

export const encrypt = (password) => {
  const hash = bcrypt.hashSync(password, rounds);
  return hash;
};

export const comparePassword = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword);
};
