const db = require("../db/dbconfig.js");

const getAllIds = async () => {
    try {
        const allIds = await db.any("SELECT * FROM ids");
        return allIds
    } catch (error) {
        return error;
    }
};

const getId = async () => {
    try {
        const oneId = await db.one("SELECT * FROM ids WHERE key=$1", key);
        return oneId;
    } catch (error) {
        return error;
    }
};

const createId = async (id) => {
    try {
        const newId = await db.one(
            "INSERT INTO ids (alias, lastname, dob, adult) VALUES($1, $2) RETURNING *", [id.alias, id.lastname, id.dob, id.adult]
        );
        return newId
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getAllIds,
    getId,
    createId,
};