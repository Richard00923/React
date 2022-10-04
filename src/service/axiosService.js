import axios from "axios";
import {baseURL} from "../configs/Url";

const axiosService = axios.create({baseURL});

export default axiosService