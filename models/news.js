const mongoose = require("mongoose");

const newsSchema = mongoose.Schema({
  source: {
    type: Object,
  },
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
  },
  urlToImage: {
    type: String,
  },
  publishedAt: {
    type: String,
  },
  content: {
    type: String,
  },
});

module.exports = {
  sportsModel: mongoose.model("sports", newsSchema),
  businessModel: mongoose.model("business", newsSchema),
  entertainmentModel: mongoose.model("entertainment", newsSchema),
  healthModel: mongoose.model("health", newsSchema),
  scienceModel: mongoose.model("science", newsSchema),
  technologyModel: mongoose.model("technology", newsSchema),
};
