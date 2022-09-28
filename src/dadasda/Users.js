import {useEffect, useState} from "react";
import User from "./User";

export default function Hm2() {
    let [character, setCharacter] = useState([])
  let [user, setUser] =  useState(null);
 const lift = (id)=>{
        setUser(id)
 }
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(value => value.json())
            .then(value => {
                setCharacter(value)
            })

    },[])


    return(<div>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
        {character.map(value => (<User user= {value} key={value.id} lift ={lift}/>))}

    </div>)
}


// <div>

//
//
//                 </div>))