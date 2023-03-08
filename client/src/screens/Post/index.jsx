import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Group, Image, Text, Textarea } from "@mantine/core";
import { IconThumbUp, IconMessageCircle } from "@tabler/icons-react";

const Post = ({ post, category }) => {
  const { _id: id, title, description, urlToImage } = post;

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
        sx={{  marginLeft: -15, marginRight: -15, marginTop: 10 }}
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
          <span style={{ marginLeft: 5 }}>0 Likes</span>
        </Button>
        <Button
          variant="light"
          color="red"
          radius="sm"
          style={{
            background: "none",
            border: "none",
            color: "#f21856",
          }}
          aria-label="Comment on post"
        >
          <IconMessageCircle size={18} alt="Comment" />
          <span style={{ marginLeft: 5 }}>0 Comments</span>
        </Button>
      </Group>

      <div style={{ marginTop: 20, padding: "10px" }}>
        <Textarea
          placeholder="Your comment"
          label=""
          labelFontSize="sm"
          radius="xl"
          size="sm"
          withAsterisk
        />
        <Button
          size="xs"
          variant="red"
          color="red"
          mt="sm"
          radius="sm"
          style={{ float: "right" }}
          onMouseEnter={(e) => (e.target.style.background = "#f8d7da")}
          onMouseLeave={(e) => (e.target.style.background = "")}
        >
          Save
        </Button>
      </div>
    </Card>
  );
};

export default Post;
