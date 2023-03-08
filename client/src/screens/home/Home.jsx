import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import PostsList from "../PostList";


const Home = () => {
  const { category } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    ["news", category],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/news/${category}`
      );
      return data;
    }
  );

  return (
    <PostsList
      category={category}
      isLoading={isLoading}
      isError={isError}
      error={error}
      data={data}
    />
  );
};

export default Home;
