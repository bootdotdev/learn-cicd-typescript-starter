import dotenv from "dotenv";
dotenv.config();

type Config = {
  db: DBConfig;
  api: APIConfig;
};

type APIConfig = {
  port: number;
  filepathRoot: string;
};

type DBConfig = {
  url: string | undefined;
};

// Normalize and parse the PORT env var safely
const rawPort = process.env.PORT;
const normalizedPortString = rawPort
  ? rawPort.trim().replace(/^['"]|['"]$/g, "")
  : "";
const parsedPort = normalizedPortString
  ? parseInt(normalizedPortString, 10)
  : 8080;
const safePort = Number.isNaN(parsedPort) ? 8080 : parsedPort;

export const config: Config = {
  api: {
    port: safePort,
    filepathRoot: "./src/assets",
  },
  db: {
    url: process.env.DATABASE_URL,
  },
};
