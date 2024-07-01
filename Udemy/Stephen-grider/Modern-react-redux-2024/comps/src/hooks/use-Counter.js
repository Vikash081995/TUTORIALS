import { useEffect, useState } from "react";

const useCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return { count, handleClick };
};

export default useCounter;
