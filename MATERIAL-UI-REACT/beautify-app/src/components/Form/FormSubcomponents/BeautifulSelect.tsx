import {
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent
} from "@mui/material";
import { minWidth } from "../ContactForm";
const skills = ["Software Dev", "Architect", "Desginer", "Business analyst"];

export const BeautifulSelect = (props: {
  value: "" | string[] | undefined;
  onChange: (
    event: SelectChangeEvent<string[]>,
    child: React.ReactNode
  ) => void;
}) => {
  return (
    <Select
      {...props}
      id="skill-select"
      renderValue={(select: string[]) => select.join(",")}
      sx={{ minWidth: minWidth, marginRight: 2 }}
    >
      {skills.map((skillName) => {
        return (
          <MenuItem value={skillName} key={skillName}>
            <ListItemText primary={skillName} />
          </MenuItem>
        );
      })}
    </Select>
  );
};
