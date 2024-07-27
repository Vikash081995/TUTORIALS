import { useState } from "react";
import Button from "./components/button";
import { Loading, Warning } from "./components/icons";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Button icon={<Loading size="25px" />} />
      <Button icon={<Warning />} />
    </>
  );
}
