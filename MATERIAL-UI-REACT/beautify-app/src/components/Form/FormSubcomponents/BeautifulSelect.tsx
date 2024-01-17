import { Select, SelectChangeEvent } from "@mui/material";
import { minWidth } from "../ContactForm";
import { ReactNode } from "react";

export const BeautifulSelect = (props: {
  value: "" | string[] | undefined;
  onChange: (event: SelectChangeEvent<string[]>, child: ReactNode) => void;
  children: ReactNode[];
}) => {
  return (
    <Select
      {...props}
      id="skill-select"
      renderValue={(select: string[]) => select.join(",")}
      sx={{ minWidth: minWidth, marginRight: 2 }}
      multiple
    >
      {props.children}
    </Select>
  );
};
