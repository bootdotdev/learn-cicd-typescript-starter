import dotenv from "dotenv";
dotenv.config();
type APIConfig = {
  port: string | undefined;
  filepathRoot: string;
};

type DBConfig = {
  url: string | undefined;
};
type Config = {
  db: DBConfig;
  api: APIConfig;
};



export const config: Config = {
  api: {
    port: process.env.PORT,
    filepathRoot: "./src/assets",
  },
  db: {
    url: process.env.DATABASE_URL,
  },
};
