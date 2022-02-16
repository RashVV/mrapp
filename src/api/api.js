import config from "./config.js";
import axios from "axios"

const BASE_URL = config.api_base_url;
const API_KEY = config.api_key;

export default axios.create({
    baseURL: `${BASE_URL}`,
    params: {
        api_key: `${API_KEY}`
    }
});
