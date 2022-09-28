import {useEffect, useState} from "react";

export default function RikAndMorty() {
    let [charecter, setcherecter] = useState( [])


    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {
            setcherecter(value.results)

        })
    return(
        charecter?.map(value => {return <div>
            <div>{value.id}</div>
            <div>{value.name}</div>
            <div>{value.status}</div>
            <img src={value.image} alt={value.name}/>
        </div>})
    )
}

