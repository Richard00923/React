import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users/',
});
const getUserAxios = () => {
    return axiosInstance.get()
}
const getUsersAxios = (id) => {
    return axiosInstance.get('/' + id)
}
export default function Users() {

    getUserAxios().then(value => value.data.map(value2 => {
        return (
            <div>
            <div>{value2?.id}</div>
            <div>{value2?.name}</div>
            <div>{value2?.username}</div>
            <div>{value2?.email}</div>
            </div>)
            }))}
console.log()

            export {getUserAxios,getUsersAxios};