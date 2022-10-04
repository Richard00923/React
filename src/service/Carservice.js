import axiosService from "./axiosService";
import {urls} from "../configs/Url";

const carService={
    getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars,car),
    getById:(id)=>axiosService.get(`${urls.cars}/${id}`),
    updateById:(id)=>axiosService.put(`${urls.cars}/${id}`),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}

export {carService}