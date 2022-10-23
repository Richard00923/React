import axios from "axios";
import {useEffect, useState} from "react";

let token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzIyZWQ2NjJkZDQ2NjZiYWE3ZWU2YmNhNGFiNWU3YSIsInN1YiI6IjYzNTU5N2NhMzg1MjAyMDA3YTAyZTBlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mQpd1H62a0pMG4OIVzRx7rAcF8fgfyghbxLUzRCPELo';
let axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {'Authorization': token}
})
let getterMovies = {
    getMuves: axiosInstance.get('/discover/movie?page=2'),

};

const Start=()=> {
    let [count, setCount] = useState();
    useEffect(() => {
        getterMovies.getMuves.then(value => {
            setCount(value.data.results)
        })
    }, [])
    console.log(count)
return(
    <div>
        {JSON.stringify(count)}
    </div>
)

}
export {Start}