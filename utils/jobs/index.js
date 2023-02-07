const axios = require("axios");

const getCategoryNewsApi = (category) =>
  `https://newsapi.org/v2/top-headlines?country=gb&category=${category}&apiKey=${process.env.NEWS_KEY}`;

const getCategoryNews = async ({ categoryModel, category }) => {
  try {
    //  remove all sports articles
    await categoryModel.deleteMany();

    const response = await axios.get(getCategoryNewsApi(category));
    // handle success
    const { data } = response;
    const { articles } = data;

    // insert or update articles
    await categoryModel.insertMany(articles);
    console.log(`- ${category}: articles updated successfully`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getCategoryNews };
