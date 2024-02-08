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

const links = ["Products", "Solutions", "Pricing", "Enterprise"];

const Header = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        boxShadow: "0",
        position: "sticky"
      }}
    >
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
        <Button variant="outlined" sx={{ mr: 3 }}>
          Sign up with Email
        </Button>
        <Button variant="outlined" sx={{ ml: 3 }}>
          Sign up with Google
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
