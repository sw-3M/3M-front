import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.43.224:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${localStorage.getItem("token")}`,
  },
});

export default client;
