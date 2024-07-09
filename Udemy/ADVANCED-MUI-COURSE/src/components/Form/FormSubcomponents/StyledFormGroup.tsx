import { FormGroup } from "@mui/material";
import { styled } from "@mui/material/styles";

type StyledFormGroupProps = {
    paddingTop?:number;
};

export const StyledFormGroup = styled(FormGroup, {
  name: "StyledFormGroup",
  slot: "wrapper",
  skipSx: true
})<StyledFormGroupProps>((props) => ({
  padding: props.theme.spacing(2),
  paddingTop:props.paddingTop,
  justifyContent: "space-between"
}));
