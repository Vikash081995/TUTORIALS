import React from "react";
import { AppBar, Drawer, Toolbar, Typography } from "@mui/material";

function NavDrawer() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">Advanced Material-ui styling</Typography>
        </Toolbar>
      </AppBar>
      <Drawer></Drawer>
      <main></main>
    </div>
  );
}

export default NavDrawer;
