import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7013d39567b445d6a034d54ec9a31d96",
  },
});
