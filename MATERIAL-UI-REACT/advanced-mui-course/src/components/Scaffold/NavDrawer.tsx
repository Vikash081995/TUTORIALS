import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useMediaQuery
} from "@mui/material";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactTable from "../Table/ContactTable";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import { useTheme, Theme, ThemeProvider } from "@mui/material/styles";
import { BeautifulTheme } from "../../Theme/BeautifulTheme";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const themedStyles = (theme: Theme, responsiveDrawerWidth: number | string) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
      width: responsiveDrawerWidth,
      "& .MuiBackdrop-root": {
        display: "none"
      }
    },
    drawerPaper: {
      width: responsiveDrawerWidth,
      backgroundColor: "rgba(120,120,120,0.2)"
    },
    content: {
      marginLeft: responsiveDrawerWidth,
      padding: 3,
      maxWidth: 720,
      minWidth:375
    },
    menuButton: {
      marginRight: 2
    },
    contentShift:{
      marginLeft:responsiveDrawerWidth
    }
  };
};

const ListItems = [
  {
    text: "Input Form",
    route: "/form"
  },
  {
    text: "Contact card grid",
    route: "/grid"
  },
  {
    text: "Contact table",
    route: "/table"
  },
  {
    text: "Contact data  grid",
    route: "/datagrid"
  }
];

function NavDrawer() {
  const theme = useTheme();
  const greaterThan375 = useMediaQuery("(min-width: 376px)");
  const [open, setOpen] = useState(greaterThan375);
  const responsiveDrawerWidth = greaterThan375 ? drawerWidth : "100%";

  useEffect(() => {
    setOpen(greaterThan375);
  }, [greaterThan375]);

  return (
    <BrowserRouter>
      {/* header section */}
      <div>
        <AppBar
          position="fixed"
          sx={themedStyles(theme, responsiveDrawerWidth).appBar}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => {
                setOpen(!open);
              }}
              sx={{
                ...themedStyles(theme, responsiveDrawerWidth).menuButton,
                display: greaterThan375 ? "none" : ""
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Advanced material ui styling
            </Typography>
          </Toolbar>
          <Drawer
            disableEnforceFocus
            variant="temporary"
            open={open}
            sx={themedStyles(theme, responsiveDrawerWidth).drawer}
            PaperProps={{
              sx: themedStyles(theme, responsiveDrawerWidth).drawerPaper,
              elevation: 9
            }}
          >
            <Toolbar />
            <List>
              {ListItems.map((nav, index) => {
                return (
                  <ListItem key={nav.text}>
                    <Link to={nav.route}>{nav.text}</Link>
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
          <main style={themedStyles(theme, responsiveDrawerWidth).content}>
            <Toolbar />
            <ThemeProvider theme={BeautifulTheme}>
              <Routes>
                <Route path={"/form"} element={<ContactForm />} />
                <Route path={"/grid"} element={<ContactCardGrid />} />
                <Route path={"/table"} element={<ContactTable />} />
                <Route path={"/datagrid"} element={<ContactDataGrid />} />
              </Routes>
            </ThemeProvider>
          </main>
        </AppBar>
      </div>
    </BrowserRouter>
  );
}

export default NavDrawer;
