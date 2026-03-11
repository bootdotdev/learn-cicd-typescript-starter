import express from "express";
import cors from "cors";
import path from "path";
import { config } from "./config.js";
import { db } from "./db/index.js";
import { middlewareAuth } from "./api/middleware.js";
import { handlerReadiness } from "./api/readiness.js";
import { handlerNotesCreate, handlerNotesGet } from "./api/notes.js";
import { handlerUsersCreate, handlerUsersGet } from "./api/users.js";

const __dirname = path.resolve();

if (!config.api.port) {
  console.error("PORT environment variable is not set");
  process.exit(1);
}

const app = express();
app.use(express.json());

function unused() {
  // this function does nothing
  // and is called nowhere
}

app.use(
  cors({
    origin: ["https://*", "http://*"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: "*",
    exposedHeaders: ["Link"],
    credentials: false,
    maxAge: 300,
  }),
);

app.use("/", express.static(path.join(__dirname, config.api.filepathRoot)));

const v1Router = express.Router();

if (db) {
  v1Router.post("/users", handlerUsersCreate);
  v1Router.get("/users", middlewareAuth(handlerUsersGet));
  v1Router.get("/notes", middlewareAuth(handlerNotesGet));
  v1Router.post("/notes", middlewareAuth(handlerNotesCreate));
}

v1Router.get("/healthz", handlerReadiness);

app.use("/v1", v1Router);

app.listen(config.api.port, () => {
  console.log(`Server is running on port: ${config.api.port}`);
});
