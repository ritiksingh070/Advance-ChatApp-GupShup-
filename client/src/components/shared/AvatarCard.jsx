import { Stack, Box, Avatar } from "@mui/material";

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction={"row"} spacing={0.5}>
      <Box width={"5rem"} height={"3rem"}>
        {avatar.map((i, index) => (
          <Avatar
            key={Math.random() * 100}
            src={i}
            alt={`Avatar ${index}`}
            sx={{
              width: "3rem",
              height: "3rem",
              position: "absolute",
              left: {
                xs: `${0.5 + index}rem`,
                sm: `${index}rem`,
              },
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default AvatarCard;
