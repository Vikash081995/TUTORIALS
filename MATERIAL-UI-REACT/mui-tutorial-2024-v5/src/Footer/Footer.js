import React from "react";
import { Typography, Box } from "@mui/material";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h3" paddingTop={10} textAlign="center">
        Ready for any team size
      </Typography>
      <Typography variant="div" textAlign="center" padding={4}>
        Optimized for any team size
      </Typography>
      <Box display="flex" margin="auto" justifyContent={"center"} padding={5}>
        <Button sx={{ mr: 2 }} variant="contained">
          Try CodeEnv for free{" "}
        </Button>
        <Button sx={{ ml: 2 }} variant="outlined">
          Talk to sales{" "}
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
