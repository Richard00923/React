import {useEffect} from "react";
import {getUserAxios, getUsersAxios} from "./Users";


export default function Test (){
    useEffect(()=>{
        getUserAxios().then(value => console.log(value.data[1]))
    })
}