import { Request, Response } from "express";
import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";
import { respondWithError, respondWithJSON } from "./json.js";
import { createUser, getUser } from "../db/queries/users.js";

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
      respondWithError(res, 500, "Couldn't retrieve user");
    }
  } catch (err) {
    respondWithError(res, 500, `Couldn't create user: ${err}`);
  }
}

export async function handlerUsersGet(req: Request, res: Response) {
  try {
    const apiKey = req.headers.authorization?.split(" ")[1];
    if (!apiKey) {
      respondWithError(res, 401, "Unauthorized");
      return;
    }
    const user = await getUser(apiKey);
    if (user) {
      respondWithJSON(res, 200, user);
    } else {
      respondWithError(res, 404, "User not found");
    }
  } catch (err) {
    respondWithError(res, 500, `Couldn't get user: ${err}`);
  }
}

// الدالة المعدلة أمنياً لضمان "عشوائية حقيقية" في مفاتيح التشفير
function generateRandomSHA256Hash() {
  // استبدلنا pseudoRandomBytes بـ randomBytes لزيادة القوة التشفيرية
  const randomBuffer = crypto.randomBytes(32);
  return crypto.createHash("sha256").update(randomBuffer).digest("hex");
}
