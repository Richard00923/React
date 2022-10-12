import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
import {carValidator} from "../../Validators";
import {carService} from "../../service";
import cars from "../Cars/Cars";

const CarForm = ({setCars,carUpdate,setCarUpdate}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all'
    });

    useEffect(() => {
        setValue('model', carUpdate?.model)
        setValue('price', carUpdate?.price)
        setValue('year', carUpdate?.year)
    },[carUpdate]);
        useEffect(() => {
            setValue('model', 'LADAGRANTE')
            setValue('price', '3600')
            setValue('year', 2004)
        },[])

    const submit = async (car) => {
        const {data} = await carService.create(car)
        console.log(data);

        setCars(cars => [...cars, data])
    }

    const update = async (car) => {
        await carService.updateById(carUpdate.id,car)
        carService.getAll().then(({data})=>{setCars(data); setCarUpdate(null)})
    }

    return (
        // <form onSubmit={handleSubmit(submit)} onChange={()=>console.log(errors)}>
        //     <input type="text" placeholder={'model'}{...register('model',{required:true,minLength:{value:2,message:`min 2 ch`}})}/>
        //     {errors.model&&<span>{errors.model.message}</span>}
        //     <input type="text" placeholder={'price'}{...register('price',{valueAsNumber:true})}/>
        //     <input type="text" placeholder={'year'}{...register('year',{valueAsNumber:true})}/>
        //     <button disabled={!isValid}>save</button>
        // </form>

        carUpdate?
            <form onSubmit={handleSubmit(update)}>
                <input type="text" placeholder={'model'}{...register('model')}/>
                {errors.model && <span>{errors.model.message}</span>}
                <input type="text"
                       placeholder={'price'}{...register('price', {valueAsNumber: true})}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input type="text"
                       placeholder={'year'}{...register('year', {valueAsNumber: true})}/>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>update</button>


            </form>:
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'}{...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text"
                   placeholder={'price'}{...register('price', {valueAsNumber: true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text"
                   placeholder={'year'}{...register('year', {valueAsNumber: true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>save</button>
        </form>
    );
};

export default CarForm;