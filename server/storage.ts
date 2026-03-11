import { type User, type InsertUser } from "@shared/schema";
import { randomUUID } from "crypto";
import path from "path";
import fs from "fs";

const TEMPLATES_DIR = path.resolve(process.cwd(), "templates");

export interface TemplateInfo {
  name: string;
  hasConfig: boolean;
  hasIndex: boolean;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  listTemplates(): Promise<TemplateInfo[]>;
  getTemplateConfig(name: string): Promise<Record<string, unknown> | null>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async listTemplates(): Promise<TemplateInfo[]> {
    if (!fs.existsSync(TEMPLATES_DIR)) {
      return [];
    }

    const entries = fs.readdirSync(TEMPLATES_DIR, { withFileTypes: true });
    const templates: TemplateInfo[] = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const templateDir = path.join(TEMPLATES_DIR, entry.name);
        const hasConfig = fs.existsSync(path.join(templateDir, "config.json"));
        const hasIndex = fs.existsSync(path.join(templateDir, "index.html"));

        templates.push({
          name: entry.name,
          hasConfig,
          hasIndex,
        });
      }
    }

    return templates;
  }

  async getTemplateConfig(
    name: string,
  ): Promise<Record<string, unknown> | null> {
    const configPath = path.join(TEMPLATES_DIR, name, "config.json");

    if (!fs.existsSync(configPath)) {
      return null;
    }

    const raw = fs.readFileSync(configPath, "utf-8");
    return JSON.parse(raw);
  }
}

export const storage = new MemStorage();
