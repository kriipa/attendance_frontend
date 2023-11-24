import React from 'react'

export default function InputField({inputName, type, register, registerName, label}) {
    return (
        <div className='flex flex-col mb-2'>
            <label className='text-sm mb-1'>{label}</label>
            <input type={type === "password"? 'password' : type=== "email"? 'email': ""} placeholder={inputName}
            {...register(`${registerName}`)} 
            className='border border-zinc-400 rounded-md h-9  text-sm px-2 mb-1 outline-none focus:border-blue-500' />
        </div>
    )
}
