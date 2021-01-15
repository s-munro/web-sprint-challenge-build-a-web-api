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
  Actions.update(req.params.id, req.body)
    .then((action) => {
      res.status(201).json(action);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error updating action" });
    });
});

router.delete("/:id", validateActionId, (req, res) => {
  Actions.remove(req.params.id)
    .then(() => {
      res.status(200).json({ message: "successfully deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error deleting action" });
    });
});
module.exports = router;
