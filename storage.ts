import { registrations, type Registration, type InsertRegistration } from "@shared/schema";

export interface IStorage {
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getRegistrations(): Promise<Registration[]>;
}

export class MemStorage implements IStorage {
  private registrations: Map<number, Registration>;
  private currentId: number;

  constructor() {
    this.registrations = new Map();
    this.currentId = 1;
  }

  async createRegistration(registration: InsertRegistration): Promise<Registration> {
    const id = this.currentId++;
    const newRegistration = { ...registration, id };
    this.registrations.set(id, newRegistration);
    return newRegistration;
  }

  async getRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }
}

export const storage = new MemStorage();
