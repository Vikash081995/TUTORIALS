import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/search",
  headers:{
    Authorization: "Bearer 5z6Z4Y4J7X0q2q",
  }
});
