const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRETKEY = process.env.SECRETKEY;
module.exports = async (req, res, next) => {
    try {
        let token = req.header("jwt");
        // console.log(token);
        if (!token) {
            res
                .status(401)
                .json({ status: false, message: "Beware, you are unauthorized" });
        }
        let verfiedToken = jwt.verify(token, SECRETKEY);
        // console.log(verfiedToken);
        if (!verfiedToken.isAdmin) {
            return res.status(401).json({
                status: false,
                message: "you are not allowed to do this action",
            });
        }
        req.admin = verfiedToken;
        next();
    } catch (error) {
        if (error) throw error;
        res.status(500).json({ error });
    }
};