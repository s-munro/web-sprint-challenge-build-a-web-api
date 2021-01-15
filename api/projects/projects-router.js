// Write your "projects" router here!
const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

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

router.get("/:id", (req, res) => {
  // get code
});

router.post("/", (req, res) => {
  // get code
});

router.put("/:id", (req, res) => {
  // get code
});

router.delete("/:id", (req, res) => {
  // get code
});

module.exports = router;
