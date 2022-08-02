import { Box } from "@mui/material";
import Post from "./Post";
const Feed = () => {
  return (
    <Box p={2} flex={4}>
      <Post
        title="My first post"
        subheader="by Kevin Grimaldi"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime
        alias totam mollitia quam dignissimos aspernatur doloribus cupiditate,
        quo voluptate debitis nam tempore molestias dolore harum, dolores sint
        cum consectetur?"
      />
      <Post
        title="My first post"
        subheader="by Kevin Grimaldi"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime
        alias totam mollitia quam dignissimos aspernatur doloribus cupiditate,
        quo voluptate debitis nam tempore molestias dolore harum, dolores sint
        cum consectetur?"
      />
      <Post
        title="My first post"
        subheader="by Kevin Grimaldi"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime
        alias totam mollitia quam dignissimos aspernatur doloribus cupiditate,
        quo voluptate debitis nam tempore molestias dolore harum, dolores sint
        cum consectetur?"
      />
      <Post
        title="My first post"
        subheader="by Kevin Grimaldi"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maxime
        alias totam mollitia quam dignissimos aspernatur doloribus cupiditate,
        quo voluptate debitis nam tempore molestias dolore harum, dolores sint
        cum consectetur?"
      />
    </Box>
  );
};

export default Feed;
