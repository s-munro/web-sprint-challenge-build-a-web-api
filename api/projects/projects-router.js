// Write your "projects" router here!
const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

const { validateProjectId, validateProject } = require("../middleware/");

router.get("/", (req, res) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error getting projects." });
    });
});

router.get("/:id", validateProjectId, (req, res) => {
  Projects.get(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error getting project" });
    });
});

router.post("/", validateProject, (req, res) => {
  Projects.insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error adding project" });
    });
});

router.put("/:id", validateProjectId, validateProject, (req, res) => {
  Projects.update(req.params.id, req.body)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "error updating project" });
    });
});

router.delete("/:id", validateProjectId, (req, res) => {
  // get code
});

module.exports = router;
