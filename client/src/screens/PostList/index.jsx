import React from "react";
import { Box, Container, Group, Text } from "@mantine/core";
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
import { categories } from "../../utils/category";

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

  if (category === "latest") {
    return (
      <Container size="md" px="xl">
        {categories.map((categoryItem) => {
          if (!data?.[categoryItem]) return null;
          const IconComponent = categoryIcons[categoryItem];
          return (
            <Box key={categoryItem}>
              <Group sx={{ marginBottom: 10, paddingTop: 20 }}>
                <IconComponent size="3rem" stroke={0.9} color="red" />
                <Text fz="xl">{categoryItem}</Text>
              </Group>
              {data?.[categoryItem]?.data?.map((post) => (
                <Post key={post.id} post={post} category={categoryItem} />
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
          <Post post={post} category={category} isLoading={isLoading} />
        ))}
      </Box>
    </Container>
  );
};

export default PostsList;
