
const express = require("express");
const ids = express.Router();
const { getAllIds, getId, createId, deleteId, updateId } = require("../queries/ids.js");
const { checkAlias, checkLastname, checkDob, checkAdult } = require("../validations/checkIds.js");


// INDEX
ids.get("/", async (req, res) => {
    const allIds = await getAllIds();
    if (allIds[0]) {
        res.status(200).json(allIds);
    } else {
        res.status(500).json({ error: "server error" });
    }
});

// SHOW
ids.get("/:key", async (req, res) => {
    const { key } = req.params;
    const id = await getId(key);
    if (id) {
        res.json(id);
    } else {
        res.status(404).json({ error: "not found" });
    }
});

//CREATE
ids.post("/", checkAlias, checkLastname, checkDob, checkAdult, async (req, res) => {
    const id = await createId(req.body);
    res.json(id);
});

//DELETE
ids.delete("/:key", async (req, res) => {
    const { key } = req.params;
    const deletedId = await deleteId(key)
    if (deletedId.key) {
        res.status(200).json(deletedId)
    } else {
        res.status(404).json("Id not found")
    }
});

// UPDATE
ids.put("/:key", checkAlias, checkLastname, checkDob, checkAdult, async (req, res) => {
    const { key } = req.params;
    const updatedId = await updateId(key, req.body);
    res.status(200).json({updatedId });
});

module.exports = ids;