
const express = require("express");
const ids = express.Router();
const { getAllIds } = require("../queries/ids.js")
// INDEX
ids.get("/", async (req, res) => {
    const allIds = await getAllIds();
    // if (allIds[0]) {
        res.status(200).json(allIds);
    // } else {
    //     res.status(500).json({ error: "server error" });
    // }
});

module.exports = ids;