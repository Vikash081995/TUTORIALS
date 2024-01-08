import { Autocomplete, TextField } from "@mui/material";
import { minWidth } from "../ContactForm";

const roles = ["React", "Angular", "Python", "Nodejs", "Machine learning"];

const BeautifulAutoComplete = (props: {
  value: string;
  onInputChange: (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => void;
}) => {
  return (
    <Autocomplete
      {...props}
      options={roles}
      renderInput={(params: any) => {
        return <TextField name="role" {...params} />;
      }}
      sx={{ minWidth: minWidth }}
      getOptionLabel={(roleOption: any) => `${roleOption}`}
      renderOption={(props: any, option: any) => {
        return <li {...props}>{`${option}`}</li>;
      }}
      isOptionEqualToValue={(option: any, value: any) =>
        option === value || value === ""
      }
    />
  );
};

export default BeautifulAutoComplete;
