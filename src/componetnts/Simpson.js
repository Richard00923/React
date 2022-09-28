import {simpson} from "./Simpson-date";


export default function Simpson() {

    return simpson.map(value => {
        return (<div>
            <div> {value.name} </div>
            <div> {value.surname} </div>
            <div> {value.age} </div>
            <div> {value.info} </div>
            <img src={value.photo} alt={value.name}/>
        </div>)
    })

}