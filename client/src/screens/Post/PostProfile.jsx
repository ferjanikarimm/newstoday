import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Card,
  Text,
  Group,
  Image,
  Button,
  Container,
  Box,
  Textarea,
  Tooltip,
} from "@mantine/core";
import axios from "axios";
import {
  IconMessageCircle,
  IconThumbUp,
  IconCaretLeft,
} from "@tabler/icons-react";
import LoadingPage from "../../screens/LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";

const SinglePost = () => {
  const { category, id } = useParams();
  let navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: post,
  } = useQuery(`post_${id}`, async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/news/${category}/${id}`
    );
    return data.post;
  });

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
    return <span>Error</span>;
  }

  return (
    <>
      <Container size="lg" px="xl">
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "90%",
            marginBottom: 10,
          }}
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
            onClick={() => navigate(-1)}
          >
            <IconCaretLeft size={35} />
          </Button>
          <Tooltip
            label={post.title}
            placement="top"
            gutter={6}
            transition="fade"
          >
            <Text
              color="black"
              fz="xl"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {post.title}
            </Text>
          </Tooltip>
        </Box>

        <Card shadow="sm" p="xs" radius="md" style={{}}>
          {post.urlToImage && <Image src={post.urlToImage} alt={post.title} />}
          <Tooltip
            label={post.title}
            placement="top"
            gutter={6}
            transition="fade"
            position="bottom-start"
          >
            <Text
              weight={450}
              color="black"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {post.title}
            </Text>
          </Tooltip>

          <Text
            size="sm"
            style={{
              overflowWrap: "break-word",
            }}
          >
            {post.description}
          </Text>
          <Group
            position="center"
            sx={{
              marginLeft: -15,
              marginRight: -15,
              marginTop: 10,
            }}
          >
            <Button
              variant="light"
              color="red"
              radius="sm"
              style={{
                marginRight: 10,
                background: "none",
                border: "none",
                color: "#f21856",
              }}
            >
              <IconThumbUp size={18} color="red" />
              <span style={{ marginLeft: 5 }}>0 Likes</span>
            </Button>
            <Button
              size="xs"
              variant="#1877f2"
              color="#1877f2"
              radius="sm"
              style={{ background: "none", border: "none", color: "#f21856" }}
            >
              <IconMessageCircle size={18} />
              <span style={{ marginLeft: 5 }}>0 Comments</span>
            </Button>
          </Group>

          <Textarea
            placeholder="Your comment"
            label=""
            labelFontSize="sm"
            radius="xl"
            size="md"
            withAsterisk
            style={{ marginBottom: "1rem" }}
          />
          <Button
            size="sm"
            variant="red"
            color="red"
            radius="sm"
            style={{ float: "right" }}
            onMouseEnter={(e) => (e.target.style.background = "#f8d7da")}
            onMouseLeave={(e) => (e.target.style.background = "")}
          >
            Save
          </Button>
        </Card>
      </Container>
    </>
  );
};

export default SinglePost;
