import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import { defaultPreference, minWidth } from "../ContactForm";

const BeautifulRadios = (props: {
  preference: string | undefined;
  handleRadioChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
}) => {
  return (
    <>
      <FormGroup
        row
        sx={{
          minWidth: minWidth,
          marginRight: { md: 2 },
          marginBottom: { xs: 2, md: 0 }
        }}
      >
        <FormLabel component="legend">Work Preferences</FormLabel>
        <RadioGroup
          id="preference-type-radio"
          name="preference"
          value={props.preference}
          onChange={props.handleRadioChange}
        >
          <FormControlLabel
            control={<Radio />}
            label={defaultPreference}
            value={defaultPreference}
          />
          <FormControlLabel control={<Radio />} label="Hybrid" value="Hybrid" />
          <FormControlLabel
            control={<Radio />}
            label="In Office"
            value="In Office"
          />
        </RadioGroup>
      </FormGroup>
    </>
  );
};

export default BeautifulRadios;
