import { Toolbar } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid container >
      <Navbar />
      <Toolbar />
      <section>
        <Outlet />
      </section>
    </Grid>
  );
}

export default App;
