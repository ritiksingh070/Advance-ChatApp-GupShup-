import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import { differenceInYears, differenceInMonths, parseISO } from "date-fns";

const Profile = () => {
  const startDate = "2024-01-01T00:00:00Z";
  const start = parseISO(startDate);
  const currDate = new Date();

  const years = differenceInYears(currDate, start);
  const months = differenceInMonths(currDate, start) % 12;
  return (
    <Stack direction={"column"} spacing={"2rem"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"Some text"} />
      <ProfileCard
        heading={"Username"}
        text={"ritiksingh070"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Bio"} text={"Ritik Singh"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={`${years} years ${months} months ago`}
        Icon={<CalendarIcon />}
      />
    </Stack>
  );
};

const ProfileCard = ({ text, heading, Icon }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon}
    <Stack>
      <Typography varient="body1">{text}</Typography>
      <Typography variant="caption" color={"gray"}>
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
