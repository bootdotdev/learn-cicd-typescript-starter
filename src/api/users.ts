import { Request, Response } from "express";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { respondWithError, respondWithJSON } from "./json.js";
import { createUser, getUser } from "../db/queries/users.js";
import { User } from "../db/schema.js";

function generateRandomSHA256Hash(): string {

  const buffer = crypto.randomBytes(32); 
  return buffer.toString("hex");
}

export async function handlerUsersCreate(req: Request, res: Response) {
  try {
    const { name } = req.body;
    const apiKey = generateRandomSHA256Hash(); 
    const userId = uuidv4();

    await createUser({
      id: userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      name,
      apiKey,
    });

    const user = await getUser(apiKey);
    if (user) {
      respondWithJSON(res, 201, user);
    } else {
      respondWithError(res, 500, "Unable to retrieve created user");
    }
  } catch (error) {
    respondWithError(res, 500, (error as Error).message);
  }
}
