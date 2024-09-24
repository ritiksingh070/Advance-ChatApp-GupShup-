import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";

const NewGroup = () => {
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>New Group</DialogTitle>
        <Stack>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={selectMemberHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))} 
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
