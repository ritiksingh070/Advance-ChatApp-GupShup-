import { ListItem, Stack, Avatar, Typography, IconButton } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const UserItem = ({ user, handler, handlerIsLoading }) => {
  const { name, _id, avatar } = user;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar />
        <Typography
          varient="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width:"100%"
          }}
        >
          {name}
        </Typography>
        <IconButton
            sx={{
                bgcolor:"primary.main",
                color:"white",
                "&:hover":{
                    bgcolor:"primary.dark"
                }
            }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
            <AddIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
};

export default UserItem;
