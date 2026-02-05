import { randomUUID } from "crypto";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
export const usersTable = sqliteTable("users", {
    id: text("id", { length: 36 })
        .primaryKey()
        .$defaultFn(() => randomUUID()),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
    name: text("name").notNull(),
    apiKey: text("api_key").notNull().unique(),
});
export const notesTable = sqliteTable("notes", {
    id: text("id", { length: 36 })
        .primaryKey()
        .$defaultFn(() => randomUUID()),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
    note: text("note").notNull(),
    userId: text("user_id")
        .notNull()
        .references(() => usersTable.id, { onDelete: "cascade" }),
});
