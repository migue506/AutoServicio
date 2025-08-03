import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nombre: text("nombre").notNull(),
  telefono: text("telefono").notNull(),
  vehiculo: text("vehiculo").notNull(),
  servicio: text("servicio").notNull(),
  mensaje: text("mensaje"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactRequests).pick({
  nombre: true,
  telefono: true,
  vehiculo: true,
  servicio: true,
  mensaje: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;
