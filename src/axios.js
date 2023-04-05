import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-a5231/us-central1/api", //API cloud function url
});

export default instance;
