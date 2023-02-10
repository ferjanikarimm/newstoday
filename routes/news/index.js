module.exports = (app) => {
  const newsController = require("../../controllers/news.controller.js");

  let router = require("express").Router();

  // Retrieve all news of a category
  router.get("/:category", newsController.getAllCategoryNews);

  router.get("/:category/:id", newsController.getPost);
  
  app.use("/api/news", router);
};
