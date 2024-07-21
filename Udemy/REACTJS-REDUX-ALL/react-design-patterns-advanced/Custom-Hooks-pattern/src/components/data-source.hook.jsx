import axios from "axios";
import { useState, useEffect } from "react";

export const useDatasource = (getData) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(response.data);
    })();
  }, [getData]);

  return resource;
};
