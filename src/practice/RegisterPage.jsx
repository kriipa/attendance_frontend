import React from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit((data) => {
                console.log("data", data)
            })}>
                <div className='m-2 border p-3 rounded-md inline-block'>
                    <p className='m-2'>Name</p>
                    <input {...register("name", {required: true})} className='border p-2 rounded-md text-sm' type="text" placeholder='enter name' />
                    <p className='m-2'>Age</p>
                    <input {...register("age", {required: true})} className='border p-2 rounded-md text-sm' type="text" placeholder='enter age' />
                    <p className='m-2'>Address</p>
                    <input {...register("address", {required: true, miLenght: 4})} className='border p-2 rounded-md text-sm' type="text" placeholder='enter address' />
                </div>
                <button className='bg-gray-700 p-2 m-2 rounded text-white'>Submit</button>
            </form>
        </div>
    )
}
