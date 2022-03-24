import axios from "axios";
import {config} from "./config";

const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;
export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}`,
  params: {
    api_key: `${API_KEY}`
  }
});

