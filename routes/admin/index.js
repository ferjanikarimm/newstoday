module.exports = (app) => {
  const verify = require("../../middlewares/adminVerify");
  const userController = require("../../middlewares/adminVerify");

  let router = require("express").Router();

  /// login to  admin
  router.post("/login", userController.verify);

  app.use("/api/admin", router);
};
