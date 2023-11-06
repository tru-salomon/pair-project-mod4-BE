
const express = require("express");
const ids = express.Router();

// INDEX
ids.get("/", (req, res) => {
    res.json({ status: "ok" });
});

module.exports = ids;