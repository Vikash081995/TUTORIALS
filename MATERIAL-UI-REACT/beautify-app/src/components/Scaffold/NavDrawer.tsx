import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography
} from "@mui/material";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ContactForm from "../Form/ContactForm";
import ContactCardGrid from "../Grid/ContactCardGrid";
import ContactTable from "../Table/ContactTable";
import ContactDataGrid from "../DataGrid/ContactDataGrid";
import { useTheme, Theme } from "@mui/material/styles";

const drawerWidth = 240;

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer
    }
  };
};

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none"
    }
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120,120,120,0.2)"
  },
  content: {
    marginLeft: drawerWidth,
    padding: 3
  }
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

  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed" sx={themedStyles(theme).appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Advanced material ui styling
            </Typography>
          </Toolbar>
          <Drawer
            variant="temporary"
            open={true}
            sx={simpleStyles.drawer}
            PaperProps={{
              sx: simpleStyles.drawerPaper,
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
          <main style={simpleStyles.content}>
            <Toolbar />
            <Routes>
              <Route path={"/form"} element={<ContactForm />} />
              <Route path={"/grid"} element={<ContactCardGrid />} />
              <Route path={"/table"} element={<ContactTable />} />
              <Route path={"/datagrid"} element={<ContactDataGrid />} />
            </Routes>
          </main>
        </AppBar>
      </div>
    </BrowserRouter>
  );
}

export default NavDrawer;
