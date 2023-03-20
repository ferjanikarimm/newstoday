import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import PostsList from "../PostList";
import { Box, Container } from "@mantine/core";
import Page404 from "../pageNotfound/Page404";
import { isCategoryValid } from "../../utils/category";

const Home = () => {
  const { category, id } = useParams();

  const { isLoading, isError, data, error } = useQuery(
    `news_${category}`,
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/news/${category}`
      );
      return data;
    }
  );

  if (!isCategoryValid(category)) {
    return (
      <Container size="md" px="xl">
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
          }}
        >
          <Page404 />
        </Box>
      </Container>
    );
  }

  return (
    <PostsList
      category={category}
      isLoading={isLoading}
      isError={isError}
      error={error}
      data={data}
      id={id}
    />
  );
};

export default Home;
