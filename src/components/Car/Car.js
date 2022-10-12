import React from 'react';
import css from './Car.module.css'
import {carService} from "../../service";
import async from "async";


const Car = ({car,setCars,setCarUpdate}) => {
    const {id, model, price, year} = car;
    return (
        <div className={css.Car}>
            <div>
                <div>id:{id}</div>
                <div>model:{model}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
            </div>
            <div className={css.tools}>
                <button onClick={()=>{
                    setCarUpdate(car)
                }
                }>Update</button>
                <button onClick={async ()=>{await carService.deleteById(id);
                    carService.getAll().then(({data})=>{setCars(data);});

                    }
                }>Delete</button>

            </div>
        </div>
    );
};

export default Car;