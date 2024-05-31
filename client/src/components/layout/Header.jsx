import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { orange } from "../contants/color";
import { Menu as MenuIcon ,Search as SearchIcon} from "@mui/icons-material";
const Header = () => {
  const handleMobile = () => {
    console.log("handleMobile");
  };
  const openSearchDialog = ()=>{
    console.log("openSearchDialog")
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar postion="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              varient="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              GupShup
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconButton color="inherit" size="large" onClick={openSearchDialog}>
                <SearchIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
