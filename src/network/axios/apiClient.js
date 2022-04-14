import { BASE_URL } from "./apiEndPoints";
import Axios from "axios";

const axiosClient = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosClient;
