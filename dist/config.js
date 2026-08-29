import dotenv from "dotenv";
dotenv.config();
export const config = {
    api: {
        port: process.env.PORT,
        filepathRoot: "./src/assets",
    },
    db: {
        url: process.env.DATABASE_URL,
    },
};
