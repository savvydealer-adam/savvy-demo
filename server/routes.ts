import type { Express } from "express";
import { type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import express from "express";

const TEMPLATES_DIR = path.resolve(process.cwd(), "templates");

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // Serve shared assets from templates/assets/
  app.use("/assets", express.static(path.join(TEMPLATES_DIR, "assets")));

  // GET /api/templates - list available templates
  app.get("/api/templates", async (_req, res) => {
    try {
      const templates = await storage.listTemplates();
      res.json(templates);
    } catch (err) {
      res.status(500).json({ error: "Failed to list templates" });
    }
  });

  // GET /api/templates/:name/config - return the config.json for a template
  app.get("/api/templates/:name/config", async (req, res) => {
    try {
      const config = await storage.getTemplateConfig(req.params.name);
      if (!config) {
        return res.status(404).json({ error: "Template not found" });
      }
      res.json(config);
    } catch (err) {
      res.status(500).json({ error: "Failed to load template config" });
    }
  });

  // GET / - serve the template gallery landing page
  app.get("/", async (_req, res) => {
    const galleryPath = path.resolve(process.cwd(), "gallery.html");
    if (fs.existsSync(galleryPath)) {
      return res.sendFile(galleryPath);
    }
    res.redirect("/demo/ford-starter");
  });

  // GET /demo/prestige-imports - serve the React SPA with path rewrite
  app.get("/demo/prestige-imports", async (_req, res) => {
    const spaPath = path.resolve(__dirname, "public", "index.html");
    if (!fs.existsSync(spaPath)) {
      return res.status(404).send("Template not found");
    }
    let html = fs.readFileSync(spaPath, "utf-8");
    // Rewrite path so wouter's client-side router sees "/" instead of "/demo/prestige-imports"
    html = html.replace(
      '<div id="root">',
      '<script>history.replaceState(null,"","/")</script><div id="root">'
    );
    res.type("html").send(html);
  });

  // GET /demo/prestige-imports/inventory - serve SPA with inventory path
  app.get("/demo/prestige-imports/inventory", async (_req, res) => {
    const spaPath = path.resolve(__dirname, "public", "index.html");
    if (!fs.existsSync(spaPath)) {
      return res.status(404).send("Template not found");
    }
    let html = fs.readFileSync(spaPath, "utf-8");
    html = html.replace(
      '<div id="root">',
      '<script>history.replaceState(null,"","/inventory")</script><div id="root">'
    );
    res.type("html").send(html);
  });

  // GET /demo/:name - serve the template's index.html directly
  app.get("/demo/:name", async (req, res) => {
    const templateName = req.params.name;
    const htmlPath = path.join(TEMPLATES_DIR, templateName, "index.html");

    if (!fs.existsSync(htmlPath)) {
      return res.status(404).send("Template not found");
    }

    res.sendFile(htmlPath);
  });

  // GET /demo/:name/:page - serve sub-pages (e.g. /demo/mullinax-ford/inventory)
  app.get("/demo/:name/:page", async (req, res) => {
    const templateName = req.params.name;
    const pageName = req.params.page;
    const htmlPath = path.join(TEMPLATES_DIR, templateName, `${pageName}.html`);

    if (!fs.existsSync(htmlPath)) {
      return res.status(404).send("Page not found");
    }

    res.sendFile(htmlPath);
  });

  return httpServer;
}
