import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default useResult = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  useEffect(() => {
    searchApi("pasts");
  }, []);
  return [searchApi, results, errorMessage];
};
