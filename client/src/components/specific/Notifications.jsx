import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography
} from "@mui/material";
import { memo } from "react";
import { sampleNotifications } from "../../constants/SampleChats";

const Notifications = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    console.log("friendRequestHandler");
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {sampleNotifications.length > 0 ? (
          sampleNotifications.map((i) => (
            <NotificationItem
              sender={i.sender}
              id={i._id}
              key={i._id}
              friendRequestHandler={friendRequestHandler}
            ></NotificationItem>
          ))
        ) : (
          <Typography textAlign={"center"}>No notifications</Typography>
        )}
      </Stack>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, id, friendRequestHandler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        width={"100%"}
      >
        <Avatar src={avatar} />
        <Typography
          varient="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} send you friend request`}
        </Typography>
        <Stack
          direction={{
            xs: "column",
           
          }}
        >
          <Button onClick={() => friendRequestHandler({ _id, accept: true })}>
            Accept
          </Button>
          <Button
            color="error"
            onClick={() => friendRequestHandler({ _id, accept: false })}
          >
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});
export default Notifications;
