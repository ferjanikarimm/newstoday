module.exports = (app) => {
  const userController = require("../../controllers/user.controller.js");

  const auth = require("../../middlewares/verifyToken");

  let router = require("express").Router();

  // register new user
  router.post("/register", userController.register);

  // login user
  router.post("/login", userController.login);

  // verify email
  router.put("/verifyEmail", (req, res) => {
    userController.virifyEmail(req, res);
  });

  app.use("/api/user", router);
};
