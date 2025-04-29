import {
  pgTable,
  integer,
  text,
  boolean,
  date,
  timestamp,
  time,
} from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer().primaryKey().notNull(),
  text: text().notNull(),
  done: boolean().default(false).notNull(),
  userId: integer("user_id").notNull(),
});

export const user = pgTable("user", {
  id: integer().primaryKey().notNull(),
  name: text().notNull(),
  email: text().notNull(),
  userTime: time().notNull(),
  userTimestamp: timestamp({ withTimezone: true }).notNull(),
  userDate: date().notNull(),
});

