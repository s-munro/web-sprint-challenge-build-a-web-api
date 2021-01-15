// Write your "actions" router here!
const express = require("express");

const Actions = require("./actions-model");

const { validateAction, validateActionId } = require("../middleware");

const router = express.Router();

router.get("/", (req, res) => {
  Actions.get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) => {
      res.status(500).json({ error: err, message: "Internal server error" });
    });
  // get code here
});

router.get("/:id", validateActionId, (req, res) => {
  res.status(200).json(req.action);
});

router.post("/", validateAction, (req, res) => {
  Actions.insert(req.body)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error adding action" });
    });
});

router.put("/:id", validateActionId, validateAction, (req, res) => {
  // get code here
});

router.delete("/:id", validateActionId, (req, res) => {
  // get code here
});
module.exports = router;
