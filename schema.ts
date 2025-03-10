import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  course: text("course").notNull(),
  message: text("message"),
});

export const insertRegistrationSchema = createInsertSchema(registrations).pick({
  fullName: true,
  email: true,
  phone: true,
  course: true,
  message: true,
});

export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Registration = typeof registrations.$inferSelect;

export const courseSchema = z.object({
  id: z.string(),
  name: z.string(),
  level: z.string(),
  duration: z.string(),
  description: z.string(),
});

export type Course = z.infer<typeof courseSchema>;
