import axios from "axios";
import {useState} from "react";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/',
});
