import "./Login.scss";

import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Stack,
  Avatar,
  IconButton,
} from "@mui/material";

import { CameraAlt as CameraAltIcon} from "@mui/icons-material";
import { useState } from "react";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validator";
import { red } from "@mui/material/colors";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const bio = useInputValidation("");
  const password = useInputValidation("");

  // const password = useStrongPassword();
  const avatar = useFileHandler("single");

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };
  const handleSignUp =(e)=>{
    e.preventDefault();
  }
  const handleLogin = (e) =>{
    e.preventDefault();
  }
  return (
    <div
      style={{
        backgroundColor: "#01050847",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          maxHeight: "150vh",
          minHeight:"100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "1.5rem 0 1rem 0",
            bgcolor:"#fff5f5",
            
          }}
        >
          {isLogin ? (
            <>
              <Typography varient="h1">Login</Typography>
              <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleLogin}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  varient="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  varient="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                ></TextField>
                <Button
                  sx={{ marginTop: "1rem" }}
                  varient="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  sx={{ marginTop: "rem" }}
                  varient="contained"
                  type="text"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Sign Up
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography  varient="h5">Register</Typography>
              <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={handleSignUp}>
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                    src={avatar.preview}
                  />

                  {avatar.error && (
                    <Typography
                      m={"1rem auto"}
                      width={"fit-content"}
                      display={"block"}
                      color="error"
                      varient="caption"
                    >
                      {avatar.error}
                    </Typography>
                  )}
                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "slateblue",
                      hover: {
                        bgcolor: "",
                        color: "grey",
                      },
                    }}
                    component="label"
                  >
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </IconButton>
                </Stack>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  margin="normal"
                  varient="outlined"
                  value={name.value}
                  onChange={name.changeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="Bio"
                  margin="normal"
                  varient="outlined"
                  value={bio.value}
                  onChange={bio.changeHandler}
                ></TextField>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  margin="normal"
                  varient="outlined"
                  value={username.value}
                  onChange={username.changeHandler}
                ></TextField>

                {username.error && (
                  <Typography color="error" varient="caption">
                    {username.error}
                  </Typography>
                )}
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  varient="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                ></TextField>

                {/* {password.error && (
                <Typography color="error" varient="caption">
                  {password.error}
                </Typography>
              )} */}
                <Button
                  sx={{ marginTop: "1rem" }}
                  varient="contained"
                  type="text"
                  fullWidth
                  
                >
                  Sign Up
                </Button>
                {/* <button className="customBtn">
                Custom Button
              </button> */}

                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>
                <Button
                  sx={{ }}
                  varient="contained"
                  type="text"
                  fullWidth
                  onClick={toggleLogin}
                >
                  Login Insted
                </Button>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
