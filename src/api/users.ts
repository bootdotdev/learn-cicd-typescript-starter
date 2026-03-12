import { Request, Response } from "express";
import crypto from "crypto"; // secure randomBytes
import { v4 as uuidv4 } from "uuid";
import { respondWithError, respondWithJSON } from "./json.js";
import { createUser, getUserByEmail } from "../db/queries/users.js";
import { User } from "../db/schema.js";

/**
 * Handler to get user info
 */
export async function handlerUsersGet(
  req: Request,
  res: Response,
  user: User,
) {
  try {
    respondWithJSON(res, 200, user);
  } catch (err) {
    respondWithError(res, 500, "Couldn't retrieve user", err);
  }
}

/**
 * Handler to create a new user
 */
export async function handlerUsersCreate(
  req: Request,
  res: Response,
) {
  try {
    const { email, name } = req.body;

    // Basic input validation
    if (
      !email ||
      !name ||
      typeof email !== "string" ||
      typeof name !== "string" ||
      email.trim() === "" ||
      name.trim() === ""
    ) {
      return respondWithError(res, 400, "Invalid or missing fields");
    }

    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    // Check if user already exists
    const existingUser = await getUserByEmail(trimmedEmail);
    if (existingUser) {
      return respondWithError(res, 409, "User already exists");
    }

    // Generate secure API key
    const apiKey = crypto.randomBytes(32).toString("hex"); // secure replacement

    // Generate user ID
    const userId = uuidv4();

    // Create the user in DB
    await createUser({
      id: userId,
      email: trimmedEmail,
      name: trimmedName,
      apiKey,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // Retrieve created user
    const createdUser = await getUserByEmail(trimmedEmail);

    respondWithJSON(res, 201, createdUser);
  } catch (err) {
    respondWithError(res, 500, "Couldn't create user", err);
  }
}
