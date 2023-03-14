import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import {
  Card,
  Text,
  Group,
  Image,
  Button,
  Container,
  Box,
  Tooltip,
} from "@mantine/core";
import {
  IconThumbUp,
  IconCaretLeft,
  IconThumbDown,
} from "@tabler/icons-react";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import { isPostLiked } from "../../utils/post";
import { useEffect, useState } from "react";
import Comment from "../../components/Comments";

const SinglePost = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const profile = JSON.parse(localStorage.getItem("profile") || "{}");

  const {
    isLoading,
    isError,
    data: post,
  } = useQuery(`post_${id}`, async () => {
    const { data } = await api.get(
      `http://localhost:5000/api/news/${category}/${id}`
    );
    return data.post;
  });

  const [count, setCount] = useState(
    Number(localStorage.getItem("post_likes_count")) || post?.likes || 0
  );
  useEffect(() => {
    localStorage.setItem("post_likes_count", count);
  }, [count]);
  // eslint-disable-next-line

  const { isLoading: isLikeLoading, mutate: likeMutate } = useMutation(() => {
    return api.post(
      `http://localhost:5000/api/news/${category}/${id}/like`,
      {}
    );
  });
  const { isLoading: isunLikeLoading, mutate: UnlikeMutate } = useMutation(
    () => {
      return api.post(
        `http://localhost:5000/api/news/${category}/${id}/unlike`,
        {}
      );
    }
  );

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

  if (!post) {
    return <p>404 not found</p>;
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

        <Card shadow="sm" p="xs" radius="md">
          {post.urlToImage && <Image src={post.urlToImage} alt={post.title} />}
          <Tooltip
            label={post.title}
            placement="top"
            gutter={6}
            transition="fade"
            position="bottom-start"
          >
            <Text weight={635} color="black">
              {post.title}
            </Text>
          </Tooltip>

          <Text size="sm" weight={480}>
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
              variant="subtle"
              color={isPostLiked(post, profile?.id) ? "red" : "green"}
              radius="sm"
              disabled={isLikeLoading}
              sx={{
                marginRight: 10,
                backgroundColor: "none!important",

                ":disabled": {
                  backgroundColor: "#fff!important",
                },
              }}
              onClick={() => {
                if (isPostLiked(post, profile?.id)) {
                  setCount((count) => (count > 0 ? count - 1 : 0));
                  UnlikeMutate(null, {
                    onSuccess: (data, variables, context) => {
                      queryClient.invalidateQueries(`post_${post?._id}`);
                    },
                    onError: (error, variables, context) => {
                      console.log({ error });
                      if (
                        error?.response?.data?.message ===
                        "Beware, you are unauthorized"
                      ) {
                        navigate("/sign");
                      }
                    },
                  });
                } else {
                  setCount((count) => count + 1);
                  likeMutate(null, {
                    onSuccess: (data, variables, context) => {
                      queryClient.invalidateQueries(`post_${post?._id}`);
                    },
                    onError: (error, variables, context) => {
                      console.log({ error });
                      if (
                        error?.response?.data?.message ===
                        "Beware, you are unauthorized"
                      ) {
                        navigate("/sign");
                      }
                    },
                  });
                }
              }}
            >
              {isPostLiked(post, profile?.id) ? (
                <>
                  <IconThumbDown size={18} />
                  <span style={{ marginLeft: 5 }}> {count} Unlike</span>
                </>
              ) : (
                <>
                  <IconThumbUp size={18} />
                  <span style={{ marginLeft: 5 }}> {count} Like</span>
                </>
              )}
            </Button>
          </Group>

          <Comment comments={post?.comments} />
        </Card>
      </Container>
    </>
  );
};

export default SinglePost;
