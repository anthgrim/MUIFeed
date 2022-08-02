import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const Post = ({ title, subheader, content }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => setIsFavorite((prev) => !prev);

  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <CardActions disableSpacing>
          <IconButton onClick={toggleFavorite}>
            {isFavorite ? (
              <FavoriteIcon sx={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Post;
