import {useEffect, useState} from "react";
import User from "./User";
import axios from "axios";

export default function Hm2() {
    let axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/users/',
    });

    let [character, setCharacter] = useState([])
    let [user, setUser] =  useState(null);
    const lift = (id)=>{
        setUser(id)
    }
    useEffect(()=>{
        axiosInstance.get().then((users)=>{setCharacter(users.data)})
    },[])


    return(<div>
        <div>{user?.id}</div>
        <div>{user?.name}</div>
        <div>{user?.username}</div>
        <div>{user?.email}</div>
        {character.map(value => (<User user= {value} key={value.id} lift ={lift}/>))}

    </div>)
}