import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  Link,
  Typography
} from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import { useMediaQuery, useTheme } from "@mui/material";
import DrawerComp from "./DrawerComp";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";

const links = ["Products", "Solutions", "Pricing", "Enterprise"];

const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "0",
        position: "sticky"
      }}
    >
      {isMatch ? (
        <Box display="flex">
          <ApiIcon sx={{ color: "black" }} />
          <Typography
            sx={{ padding: 0.5, color: "black" }}
            variant="h6"
            fontFamily="fantasy"
          >
            CodeEnv
          </Typography>
          <DrawerComp links={links} />
        </Box>
      ) : (
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center"
            }}
          >
            <ApiIcon sx={{ color: "black" }} />
            <Box>
              <Tabs component={Link} sx={{ textDecoration: "none" }}>
                {links.map((link, index) => (
                  <Tab
                    sx={{
                      fontWeight: "bold",
                      textDecoration: "none",
                      ":hover": {
                        textDecoration: "underline",
                        textUnderlineOffset: "5px"
                      }
                    }}
                    key={index}
                    label={link}
                  />
                ))}
              </Tabs>
            </Box>
          </Box>
          <Box display="flex" marginLeft={"auto"}>
            <Button sx={{ mr: 2 }} variant="outlined">
              Talk to us
            </Button>
            <Button sx={{ ml: 2 }} variant="contained">
              Try for free
            </Button>
          </Box>
        </Toolbar>
      )}

      <DrawerComp />
      <Box width="100%" height="100vh">
        <video
          width={"100%"}
          height="50%"
          autoPlay
          loop
          playInline
          src="/video.mp4"
        ></video>
      </Box>
      <Box display="flex" width="100%">
        <Typography
          margin="auto"
          variant="h4"
          color="balck"
          textAlign={"center"}
          fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
        >
          Build Your Softwares hassle free
        </Typography>
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
      >
        <Button endIcon={<EmailIcon />} variant="outlined" sx={{ mr: 3 }}>
          Sign up
        </Button>
        <Button
          color="error"
          endIcon={<GoogleIcon />}
          variant="outlined"
          sx={{ ml: 3 }}
        >
          Sign up
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
