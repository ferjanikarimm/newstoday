import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Group,
  Image,
  Text,
  Burger,
  Box,
  ActionIcon,
} from "@mantine/core";
import { IconAdjustments, IconChevronDown, IconChevronUp, IconThumbUp } from "@tabler/icons-react";
import Comment from "../../components/Comments";
import { useDisclosure } from "@mantine/hooks";
const Post = ({ post, category }) => {
  const { _id: id, title, description, urlToImage } = post;
  const { toggle } = useDisclosure(false);
  const [opened, setOpened] = useState(false);
  const label = opened ? "Close navigation" : "Open navigation";
  const handleCommentToggle = () => {
    setOpened(!opened);
  };
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      style={{ marginBottom: 25 }}
    >
      <Link style={{ textDecoration: "none" }} to={`/news/${category}/${id}`}>
        <Card.Section>
          {urlToImage && <Image src={urlToImage} alt={title} />}
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text
            weight={500}
            color="black"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "90%",
            }}
          >
            {title}
          </Text>
        </Group>
      </Link>
      <Text
        size="sm"
        color="dimmed"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {description}
      </Text>

      <Group
        position="center"
        sx={{ marginLeft: -15, marginRight: -15, marginTop: 10 }}
      >
        <Button
          variant="light"
          color="red"
          radius="sm"
          style={{
            background: "none",
            border: "none",
            color: "#f21856",
          }}
          aria-label="Like post"
        >
          <IconThumbUp size={18} alt="Like" />
          <span style={{ marginLeft: 5 }}>Likes</span>
        </Button>
      </Group>

      <Box sx={{ textAlign: "center" }}>
        <Button
          radius="sm"
          color="red"
          variant="light"
          size="xs"
          opened={opened}
          onClick={handleCommentToggle}
          aria-label={label}
        >
          {opened ? (
            <>
              <IconChevronUp size={12} style={{ marginRight: 4 }} />
              Hide comments
            </>
          ) : (
            <>
              <IconChevronDown size={12} style={{ marginRight: 4 }} />
              Show comments
            </>
          )}
        </Button>
        {opened && <Comment comments={post?.comments} />}
      </Box>
    </Card>
  );
};

export default Post;
