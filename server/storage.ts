import { type ContactRequest, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactRequest(contact: InsertContact): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, ContactRequest>;

  constructor() {
    this.contacts = new Map();
  }

  async createContactRequest(insertContact: InsertContact): Promise<ContactRequest> {
    const id = randomUUID();
    const contact: ContactRequest = { 
      ...insertContact, 
      id, 
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
