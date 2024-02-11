import { Drawer } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { List } from "@mui/material";
import { ListItemText } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((item) => (
            <ListItemButton>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ ml: "auto" }} onClick={() => setOpen(true)}>
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};
export default DrawerComp;
