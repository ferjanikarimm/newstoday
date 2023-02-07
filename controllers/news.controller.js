const { sportsModel, businessModel,entertainmentModel, healthModel,scienceModel,technologyModel} = require("../models/news");

const getAllModelNews = async (model) => {
  try {
    const categoryNews = await model.find({});
    return { data: categoryNews, count: 0 };
  } catch (err) {
    console.error(err);
  }
};

// get all category news
exports.getAllCategoryNews = async (req, res) => {
  const category = req.params.category;

  switch (category) {
    //......sports
    case "sports":
      return res.json({ sports: await getAllModelNews(sportsModel) });
    //......business
    case "business":
      return res.json({ business: await getAllModelNews(businessModel) });
    //....entertainment
    case "entertainment":
      return res.json({
        entertainment: await getAllModelNews(entertainmentModel),
      });
    //..... health
    case "health":
      return res.json({
        health: await getAllModelNews(healthModel),
      });
    //.....science
    case "science":
      return res.json({
        science: await getAllModelNews(scienceModel),
      });
    //.......technology
    case "technology":
      return res.json({
        technology: await getAllModelNews(technologyModel),
      });

    // ........... here
    case "all":
      return res.json({
        sports: await getAllModelNews(sportsModel),
        business: await getAllModelNews(businessModel),
        entertainment: await getAllModelNews(entertainmentModel),
        health: await getAllModelNews(healthModel),
        science: await getAllModelNews(scienceModel),
        technology: await getAllModelNews(technologyModel),

        // ........... here
      });
  }

  return res.json({});
};

const models = {
  sports: sportsModel,
  business: businessModel,
  entertainment: entertainmentModel,
  health: healthModel,
  science: scienceModel,
  technology: technologyModel,
};

exports.getPost = async (req, res) => {
  const { category, id } = req.params;

  try {
    const model = models[category];
    if (!model) return res.json({ error: "category not found" });
    const post = await model.findById(id);
    // if post not found
    if (!post) return res.json({ error: "post not found" });
    return res.json({ post });
  } catch (error) {
    console.error(error);
    res.json({ error });
  }
};
