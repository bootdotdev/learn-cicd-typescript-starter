import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { respondWithError, respondWithJSON } from "./json.js";
import { createNote, getNote, getNotesForUser } from "../db/queries/notes.js";
import { User } from "../db/schema.js";

export async function handlerNotesGet(req: Request, res: Response, user: User) {
  try {
    const posts = await getNotesForUser(user.id);
    respondWithJSON(res, 200, posts);
  } catch (err) {
    respondWithError(res, 500, "Couldn't retrieve notes", err);
  }
}

export async function handlerNotesCreate(
  req: Request,
  res: Response,
  user: User,
) {
  try {
    const { note } = req.body;
    const noteId = uuidv4();

    await createNote({
      id: noteId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      note,
      userId: user.id,
    });

    const createdNote = await getNote(noteId);
    respondWithJSON(res, 201, createdNote);
  } catch (err) {
    respondWithError(res, 500, "Couldn't create note", err);
  }
}
