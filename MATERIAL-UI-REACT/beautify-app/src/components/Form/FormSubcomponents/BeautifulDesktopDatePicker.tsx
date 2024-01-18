import { TextField, TextFieldProps } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { minWidth } from "../ContactForm";

const BeautifulDesktopDatePicker = (props: {
  value: string | undefined;
  onChange: (
    value: string | null | undefined,
    _: any,
    keyboardInputValue?: string | undefined
  ) => void;
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Date"
        format="MM/DD/YYYY"
        {...props}
        // renderInput={(params: TextFieldProps) => {
        //   return (
        //     <TextField
        //       {...params}
        //       sx={{ minWidth: minWidth, marginRight: 2 }}
        //     />
        //   );
        // }}
        //  components={{
        //   OpenPickerIcon:CalendarTodayIcon
        //  }}

        // PopperProps={{}}
      />
    </LocalizationProvider>
  );
};

export default BeautifulDesktopDatePicker;
