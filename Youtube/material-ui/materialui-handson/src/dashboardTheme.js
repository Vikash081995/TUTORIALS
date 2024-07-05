import { createTheme, styled } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  components: {
    //name of component
    MuiButton: {
      styleOverrides: {
        //name of the slot 
        contained:{
            backgroundColor:'red !important'
        }
      }
    }
  },
  palette:{
    primary:{
        main:'#bada55'
    }
  }
});
