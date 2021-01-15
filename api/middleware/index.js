const Actions = require("../actions/actions-model");
const Projects = require("../projects/projects-router");

const validateActionId = (req, res, next) => {
  const { id } = req.params;
  Actions.get(id)
    .then((action) => {
      if (!action) {
        res
          .status(404)
          .json({ message: `An action by ID ${id} does not exist.` });
      } else {
        req.action = action;
        next();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Internal server error" });
    });
  // validate
};

const validateAction = (req, res, next) => {
  // validate
};

const validateProjectId = (req, res, next) => {
  const { id } = req.params;
  Projects.get(id)
    .then((project) => {
      if (!project) {
        res.status(404).json({ message: `Project by ID ${id} does not exist` });
      } else {
        req.project = project;
        next();
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error retrieving project" });
    });
  // validate
};

const validateProject = (req, res, next) => {
  // validate
};

module.exports = {
  validateActionId,
  validateAction,
  validateProjectId,
  validateProject,
};
