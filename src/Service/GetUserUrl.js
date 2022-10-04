import axios from "axios";
const _urlUSERS =`https://jsonplaceholder.typicode.com/users/`;
const _urlPOSTS = `https://jsonplaceholder.typicode.com/posts/`;
const axiosinstanceUsers = axios.create({baseURL:_urlUSERS}).get();
const axiosistancePosts = axios.create({baseURL:_urlPOSTS}).get();
export {axiosinstanceUsers,axiosistancePosts}