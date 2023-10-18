import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b91b296625ca45b88c8438222db27423",
  },
});
