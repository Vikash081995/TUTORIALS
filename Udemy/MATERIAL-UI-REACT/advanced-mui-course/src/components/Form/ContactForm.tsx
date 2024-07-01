import {
  Alert,
  AlertTitle,
  Button,
  Checkbox,
  Dialog,
  FormControl,
  FormGroup,
  ListItemText,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Stack
} from "@mui/material";
import { contactData, FormValues } from "../../Data/ContactData";
import React, { useState } from "react";
import { BeautifulTextField } from "./FormSubcomponents/BeautifulTextField";
import BeautifulAutoComplete from "./FormSubcomponents/BeautifulAutoComplete";
import { BeautifulSelect } from "./FormSubcomponents/BeautifulSelect";
import BeautifulDesktopDatePicker from "./FormSubcomponents/BeautifulDesktopDatePicker";
import BeautifulRadios from "./FormSubcomponents/BeautifulRadios";
import { StyledFormGroup } from "./FormSubcomponents/StyledFormGroup";
import { useTheme } from "@mui/material/styles";

const skills = ["Software Dev", "Architect", "Desginer", "Business analyst"];

const today = new Date();
export const defaultPreference = "Work from Home";
export const minWidth = 300;

const paperInputStyle = {
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { border: "1px solid ", borderColor: "primary.main" },
    "&:hover": {
      "& > fieldset": {
        borderColor: "primary.light"
      }
    }
  },
  "& .MuiFormLabel-root": {
    color: "pprimary.dark"
  }
};

function ContactForm() {
  const theme = useTheme();
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

  const [alertOpen, setAlertOpen] = useState(false);

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

  const handleSubmit = () => {
    contactData.push(formValues);
    setAlertOpen(true);
    clearValues();
  };

  const clearValues = () => {
    setFormValues({ ...getDefaultFormValues() });
  };

  const handleAlertClick = () => {
    setAlertOpen(false);
  };

  return (
    <>
      <Paper
        sx={{
          ...paperInputStyle,
          margin: { xs: 1, sm: 2 },
          zIndex: theme.zIndex.appBar + 1,
          "&:hover": { backgroundColor: "rgba(0,0,0,0,1)" },
          backgroundColor: "grid.dark"
        }}
      >
        <form>
          <FormControl>
            <StyledFormGroup>
              <BeautifulTextField
                value={formValues.name}
                onChange={handleTextFieldChange}
              />
              <BeautifulAutoComplete
                value={formValues.role || ""}
                onInputChange={handleAutoCompleteChange}
              />
            </StyledFormGroup>
            <StyledFormGroup>
              <BeautifulSelect
                value={formValues.skills || ""}
                onChange={handleSelectChange}
              >
                {skills.map((skillName) => {
                  return (
                    <MenuItem value={skillName} key={skillName}>
                      <Checkbox
                        checked={formValues.skills?.includes(skillName)}
                      />
                      <ListItemText primary={skillName} />
                    </MenuItem>
                  );
                })}
              </BeautifulSelect>
              <BeautifulDesktopDatePicker
                value={formValues.startDate}
                onChange={handleDatePickerChange}
              />
            </StyledFormGroup>
            <BeautifulRadios
              preference={formValues.preference}
              handleRadioChange={handleRadioChange}
            />
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              sx={{ minWidth: minWidth }}
            >
              <Button
                variant="contained"
                sx={{ height: 56, width: 100 }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              <Button variant="beautiful" sx={{ height: 56, width: 100 }}>
                Clear
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Paper>
      <Dialog open={alertOpen} onClose={handleAlertClick}>
        <Alert onClose={handleAlertClick}>
          <AlertTitle>Success!!</AlertTitle>
          Form Submitted
        </Alert>
      </Dialog>
    </>
  );
}

export default ContactForm;
