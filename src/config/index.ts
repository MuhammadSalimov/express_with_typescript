import dotenv from "dotenv";
dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === "development";
export const TEST = process.env.NODE_ENV === "test";

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 1234;
const SERVER_HOST = process.env.SERVER_HOST || "localhost";

export const SERVER = {
  port: SERVER_PORT,
  host: SERVER_HOST,
};
