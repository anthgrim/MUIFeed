import { Box, Typography, Avatar, AvatarGroup } from "@mui/material";

const Rightbar = () => {
  return (
    <Box p={2} sx={{ display: { xs: "none", sm: "block" } }} flex={2}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
          <Avatar alt="Michel Johns" />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
