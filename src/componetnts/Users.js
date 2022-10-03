import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/',
});
const getUserAxios = () => {
    return axiosInstance.get()
}
const getUsersAxios = (id) => {
    return axiosInstance.get('/'+id)
}
export { getUserAxios,getUsersAxios}