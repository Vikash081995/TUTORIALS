import { ReactElement } from "react";
import { Loading } from "./icons";

const Button = ({ icon }: { icon: ReactElement }) => {
  return <button>Submit {icon}</button>;
};

export default Button;
