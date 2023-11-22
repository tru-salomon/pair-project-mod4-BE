const db = require("../db/dbconfig.js");

const getAllIds = async () => {
    try {
        const allIds = await db.any("SELECT * FROM ids");
        return allIds
    } catch (error) {
        return error;
    }
};

const getId = async (key) => {
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

const deleteId = async (key) => {
    try {
        const deletedId = await db.one(
            "DELETE FROM ids WHERE key = $1 RETURNING *",
            key
        );
        return deletedId
    } catch (error) {
        return error;
    }
};

const updateId = async (key, id) => {
    try {
        const updatedId = await db.one(
            "UPDATE ids SET alias=$1, lastname=$2, dob=$3, adult=$4 WHERE key=$5 RETURNING *",
            [id.alias, id.lastname, id.dob, id.adult, key]
        );
        return updatedId;
    } catch (error) {
        return error;
    }
};


module.exports = {
    getAllIds,
    getId,
    createId,
    deleteId,
    updateId
};