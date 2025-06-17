import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  app.get("/api/modules", async (req, res) => {
    try {
      const modules = await dao.findAllModules();
      res.json(modules);
    } catch (error) {
      console.error("Error fetching modules:", error);
      res.status(500).json({ message: "Error fetching modules" });
    }
  });

  app.get("/api/modules/:moduleId", async (req, res) => {
    try {
      const { moduleId } = req.params;
      const module = await dao.findModuleById(moduleId);
      if (module) {
        res.json(module);
      } else {
        res.status(404).json({ message: "Module not found" });
      }
    } catch (error) {
      console.error("Error fetching module:", error);
      res.status(500).json({ message: "Error fetching module" });
    }
  });

  app.get("/api/courses/:courseId/modules", async (req, res) => {
    try {
      const { courseId } = req.params;
      const modules = await dao.findModulesForCourse(courseId);
      res.json(modules);
    } catch (error) {
      console.error("Error fetching modules for course:", error);
      res.status(500).json({ message: "Error fetching modules for course" });
    }
  });

  app.post("/api/modules", async (req, res) => {
    try {
      const module = await dao.createModule(req.body);
      res.json(module);
    } catch (error) {
      console.error("Error creating module:", error);
      res.status(500).json({ message: "Error creating module" });
    }
  });

  app.put("/api/modules/:moduleId", async (req, res) => {
    try {
      const { moduleId } = req.params;
      const moduleUpdates = req.body;
      console.log(`Updating module ${moduleId} with:`, moduleUpdates);
      
      const updatedModule = await dao.updateModule(moduleId, moduleUpdates);
      res.json(updatedModule);
    } catch (error) {
      console.error("Error updating module:", error);
      res.status(500).json({ message: "Error updating module", error: error.message });
    }
  });

  app.delete("/api/modules/:moduleId", async (req, res) => {
    try {
      const { moduleId } = req.params;
      const status = await dao.deleteModule(moduleId);
      res.send(status);
    } catch (error) {
      console.error("Error deleting module:", error);
      res.status(500).json({ message: "Error deleting module" });
    }
  });
} 