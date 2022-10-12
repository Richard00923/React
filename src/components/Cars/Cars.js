import React, {useEffect, useState} from 'react';
import CarForm from "../CarForm/CarForm";
import {carService} from "../../service";
import Car from "../Car/Car";


const Cars = () => {
  const [cars,setCars]  = useState([]);
  const [carUpdate,setCarUpdate]=useState(null);


  useEffect(()=>{

      carService.getAll().then(({data})=>setCars(data))
  },[])
    return (
        <div>
          <CarForm setCars={setCars} carUpdate={carUpdate} setCarUpdate={setCarUpdate}/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car} setCarUpdate={setCarUpdate} setCars={setCars}/>)}
        </div>
    );
};
export default Cars;