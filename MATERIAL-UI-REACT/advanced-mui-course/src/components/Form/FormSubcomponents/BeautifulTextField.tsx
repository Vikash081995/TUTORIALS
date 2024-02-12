import { TextField, TextFieldProps } from "@mui/material";
import { minWidth } from "../ContactForm";

export const BeautifulTextField = (props: TextFieldProps) => {
  return (
    <TextField
      {...props}
      id="name"
      name="name"
      label="Name"
      variant="outlined"
      sx={{
        minWidth: minWidth,
        marginRight: { xs: 2, md: 0 },
        zIndex: "drawer",
        "& .MuiInputBase-root": {
          height: 80
        },
        "& .MuiOutlinedInput-root.Mui-focus": {
          "& > fieldset": {
            borderColor: "primary.dark"
          }
        },
        "& .MuiOutlindInput-root:hover": {
          "& > fieldset.MuiOutlinedInput-notchedOutline": {
            borderColor: "orange"
          }
        }
      }}
    />
  );
};
