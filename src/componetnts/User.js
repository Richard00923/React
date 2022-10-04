import axios from "axios";
import {useEffect, useState} from "react";
import User from "./Users";
import {axiosinstanceUsers} from "../Service/GetUserUrl";
import {axiosistancePosts} from "../Service/GetUserUrl";

export default function Hm2() {

    let [users, setUsers] = useState(null)
    let [user, setUser] =  useState(null);
    let [post, setPosts] =  useState(null);
    const lift = (value)=>{
        console.log(post)
        let arrPostsOfUser=post.filter((item)=>item.userId === value.id);
        setUser(arrPostsOfUser)
        console.log(value?.id)
        console.log(arrPostsOfUser)
    }
    useEffect(()=>{
        axiosinstanceUsers.then(users=>{setUsers(users.data)});
        axiosistancePosts.then(posts=>{setPosts(posts.data)});
    },[])

    return(<div>{
        user?.map(post=>{return(<div>{post.title}</div>)})
    }
        {users?.map(value => (<User user= {value} key={value.id} lift ={lift}/>))}

    </div>)
}