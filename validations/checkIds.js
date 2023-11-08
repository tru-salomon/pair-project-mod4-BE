const checkAlias = (req, res, next) => {
    if (req.body.alias) {
        return next();
    } else {
        res.status(400).json({ error: "alias is required" });
    }
}

const checkLastname = (req, res, next) => {
    if (req.body.lastname) {
        return next();
    } else {
        res.status(400).json({ error: "lastname is required" });
    }
}

const checkDob = (req, res, next) => {
    if (req.body.dob) {
        return next();
    } else {
        res.status(400).json({ error: "dob is required" });
    }
}

const checkAdult = (req, res, next) => {
    if (typeof req.body.adult === 'boolean') {
        return next();
    } else {
        res.status(400).json({ error: "adult must be a boolean" });
    }
}

    module.exports = { checkAlias, checkLastname, checkDob, checkAdult };