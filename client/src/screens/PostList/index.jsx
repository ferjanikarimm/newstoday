import React from "react";
import { Box, Container, Text } from "@mantine/core";
import Post from "../../screens/Post";
import {
  IconAugmentedReality2,
  IconBallFootball,
  IconPlant,
  IconActivity,
  IconBusinessplan,
  IconDeviceTv,
} from "@tabler/icons-react";
import LoadingPage from "../../screens/LoadingPage/LoadingPage";

const PostsList = ({ category, isLoading, isError, error, data }) => {
  if (isLoading) {
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
          <LoadingPage />
        </Box>
      </Container>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const categoryIcons = {
    sports: IconBallFootball,
    business: IconBusinessplan,
    technology: IconAugmentedReality2,
    science: IconPlant,
    health: IconActivity,
    entertainment: IconDeviceTv,
  };

  const categories = [
    "sports",
    "business",
    "technology",
    "science",
    "health",
    "entertainment",
  ];

  if (category === "latest") {
    return (
      <Container size="md" px="xl">
        {categories.map((categoryItem) => {
          const IconComponent = categoryIcons[categoryItem];
          return (
            <Box >
              <Text fz="lg">
                <IconComponent size="3rem" stroke={0.9} color="red"/>
                {categoryItem}
              </Text>
              {data?.[categoryItem]?.data?.map((post) => (
                <Post post={post} category={categoryItem} />
              ))}
            </Box>
          );
        })}
      </Container>
    );
  }

  return (
    <Container size="md" px="xl">
      <Box>
        {data?.[category]?.data?.map((post) => (
          <Post post={post} category={category} />
        ))}
      </Box>
    </Container>
  );
};

export default PostsList;
