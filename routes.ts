import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  app.post("/api/registrations", async (req, res) => {
    try {
      const registration = insertRegistrationSchema.parse(req.body);
      const result = await storage.createRegistration(registration);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: "Invalid registration data" });
    }
  });

  app.get("/api/registrations", async (req, res) => {
    const registrations = await storage.getRegistrations();
    res.json(registrations);
  });

  const httpServer = createServer(app);
  return httpServer;
}
