
const express = require("express");
const ids = express.Router();
const { getAllIds, getId, createId } = require("../queries/ids.js")
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
ids.post("/", async (req, res) => {
    const id = await createId(req.body);
    res.json(id);
});

module.exports = ids;