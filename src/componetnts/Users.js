import axios from "axios";
import {useState} from "react";

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
    let [user, setUser] = useState(null);

    // return (
    //     <div>
    //         <div>{user?.id}</div>
    //         <div>{user?.name}</div>
    //         <div>{user?.username}</div>
    //         <div>{user?.email}</div>
    //     </div>)

}


console.log()

export {getUserAxios, getUsersAxios};