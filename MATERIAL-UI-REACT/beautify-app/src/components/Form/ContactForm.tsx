import {
  Alert,
  AlertTitle,
  Autocomplete,
  Button,
  Dialog,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextFieldProps } from "@mui/material";
import { contactData, FormValues } from "../../Data/ContactData";
import React, { useState } from "react";

const roles = ["React", "Angular", "Python", "Nodejs", "Machine learning"];
const skills = ["Software Dev", "Architect", "Desginer", "Business analyst"];
const today = new Date();
const defaultPreference = "Work from Home";
const minWidth = 300;

function ContactForm() {
  const getDefaultFormValues = () => {
    return {
      id: contactData.length + 1,
      name: "",
      skills: [],
      startDate: `${
        today.getMonth() + 1
      }/${today.getDate()}/${today.getFullYear()}}`,
      preference: defaultPreference
    };
  };

  const [formValues, setFormValues] = useState<FormValues>(
    getDefaultFormValues()
  );

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleAutoCompleteChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setFormValues({
      ...formValues,
      role: value || ""
    });
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => {
    const {
      target: { value }
    } = event;

    setFormValues({
      ...formValues,
      skills: typeof value === "string" ? value.split(", ") : value
    });
  };

  const handleDatePickerChange = (
    value: string | null | undefined,
    _: any,
    keyboardInputValue?: string | undefined
  ) => {
    const startDate = value as unknown as {
      month: () => string;
      date: () => string;
      year: () => string;
    };

    setFormValues({
      ...formValues,
      startDate: `${
        startDate.month() + 1
      }/ ${startDate.date()}/${startDate.year()}`
    });
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const { name } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  return (
    <>
      <Paper>
        <form>
          <FormControl>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <TextField
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                value={formValues.name}
                sx={{ minWidth: minWidth, marginRight: 2 }}
                onChange={handleTextFieldChange}
              />
              <Autocomplete
                options={roles}
                renderInput={(params) => {
                  return <TextField name="role" {...params} />;
                }}
                sx={{ minWidth: minWidth }}
                getOptionLabel={(roleOption) => `${roleOption}`}
                renderOption={(props, option) => {
                  return <li {...props}>{`${option}`}</li>;
                }}
                value={formValues.role || ""}
                isOptionEqualToValue={(option, value) =>
                  option === value || value === ""
                }
                onInputChange={handleAutoCompleteChange}
              />
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <Select
                id="skill-select"
                renderValue={(select: string[]) => select.join(",")}
                value={formValues.skills}
              >
                {skills.map((skillName) => {
                  return (
                    <MenuItem value={skillName} key={skillName}>
                      <ListItemText primary={skillName} />
                    </MenuItem>
                  );
                })}
              </Select>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Date"
                  format="MM/DD/YYYY"
                  // renderInput={(params: TextFieldProps) => {
                  //   return (
                  //     <TextField
                  //       {...params}
                  //       sx={{ minWidth: minWidth, marginRight: 2 }}
                  //     />
                  //   );
                  // }}
                  value={formValues.startDate}
                  onChange={handleDatePickerChange}
                />
              </LocalizationProvider>
            </FormGroup>
            <FormGroup row sx={{ padding: 2, justifyContent: "space-between" }}>
              <FormLabel component="legend">Work Preferences</FormLabel>
              <RadioGroup
                id="preference-type-radio"
                name="preference"
                value={formValues.preference}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  control={<Radio />}
                  label={defaultPreference}
                  value={defaultPreference}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="Hybrid"
                  value="Hybrid"
                />
                <FormControlLabel
                  control={<Radio />}
                  label="In Office"
                  value="In Office"
                />
              </RadioGroup>
              <Stack>
                <Button>Submit</Button>
                <Button>Clear</Button>
              </Stack>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={false}>
        <Alert>
          <AlertTitle>Success!!</AlertTitle>
        </Alert>
      </Dialog>
    </>
  );
}

export default ContactForm;
