import styled from "styled-components";
import { useNavApi, useNavData } from "../context/nav-controller";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = () => {
  const { open, close } = useNavApi();
  const { collapsed } = useNavData();
  return (
    <ToggleButton onClick={collapsed ? open : close}>
      {collapsed ? "➤" : "⮜"}
    </ToggleButton>
  );
};

export const CloseButton = () => {
  const { close } = useNavApi();
  return <ToggleButton onClick={close}></ToggleButton>;
};

export default Button;
