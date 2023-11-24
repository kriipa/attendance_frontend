import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button';

export default function RegisterPage() {
    const registerData = [
        {
            id : 1,
            title : "Name",
            registerName : "name",
            placeholder: "Enter name",
            validation : true,
            message: "Name is required.",
        },
        {
            id : 2,
            title : "Age",
            registerName : "age",
            placeholder: "Enter age",
            validation : true,
            message: "Age is required.",
        },
        {
            id : 3,
            title : "Address",
            registerName : "address",
            placeholder: "Enter address",
            validation : true,
            message: "Address is required.",
        },

    ]
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: "",
            age: "",
            address: ""
        }
    });
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit((data) => {
                console.log("data", data)})}>
                <div className='m-2 border  p-3 rounded-md inline-block shadow-md bg-slate-400'>
                    {
                        registerData.map((signup) => {
                            return(
                                <div key={signup.id}>
                                    <p className='m-2'>{signup.title}</p>
                                    <input {...register(`${signup.registerName}`, {required: signup?.message})} className='border border-black p-2 rounded-md text-sm' type="text" placeholder={signup.placeholder} />
                                    {/* <p className='text-sm text-red-800'>{errors?.root?.message}</p> */}
                                </div>
                            );
                        })
                    }

                    {/* <p className='m-2'>Address</p>
                    <input {...register("address", {required: 'Address is required.', minLenght: {
                        value: 4,
                        message: 'Mi n lenght is 4'
                    }})} className='border border-black p-2 rounded-md text-sm' type="text" placeholder='enter address' />
                    <p className='text-sm text-red-800'>{errors.address?.message}</p> */}
                </div>
                <div>
                    {/* <button className='bg-gray-700 p-2 m-2 rounded text-white'>Submit</button> */}
                    <Button buttonName={"Submit"} />
                </div>
            </form>
        </div>
    )
}
