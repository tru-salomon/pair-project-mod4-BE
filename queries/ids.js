const db = require("../db/dbconfig.js");

const getAllIds = async () => {
    try {
        const allIds = await db.any("SELECT * FROM ids");
        return allIds
    } catch (error) {
        return error;
    }
};

module.exports = { getAllIds };