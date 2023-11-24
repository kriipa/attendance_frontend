import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';
import { useForm } from 'react-hook-form';

export default function LoginResp() {
    const [data, setData] = useState({
        identity : "",
        password : ""
    });
    const [loginResp, setloginResp] = useState();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name] : value
        })
    }
    
    console.log(data)

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     const userData = {
    //         identity : data.identity,
    //         password : data.password
    //     }
    //     axios.post("https://adminbackend.unentrance.com/auth/v1/account/login/", userData)
    //         .then((response) => {
    //             if(response.status===200){
    //                 navigate("/")
    //             }
    //             console.log("resp", response.status)
    //         })
    // }

    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues: {
            identity: "",
            password: ""
        }
    });
    console.log("watch", watch());

    return (
        <div>
            <form className='m-2' onSubmit={handleSubmit(data => console.log(data))}>
                <div className='m-2'>
                    <p>Identity</p>
                    {/* <input onChange={handleChange} className='border border-emerald-600 p-2 rounded-sm' placeholder="enter your identity" type="text" name="identity"/> */}
                    <InputField register={register} registernName={"identity"} inputName="Enter your identity" 
                    name="identity"/>
                </div>
                <div className='m-2'>
                    <p>Password</p>
                    {/* <input onChange={handleChange} className='border p-2 border-emerald-600 rounded-sm' placeholder="enter your password" type="password" name="password" /> */}
                    <InputField register={register} registernName={"password"} inputName="Enter your password" type="password" 
                    name="password"/>
                </div>
                
                {/* <button className='m-2 bg-emerald-900 text-white px-4 py-1 w-52 rounded-md' type='submit'>Submit</button> */}
                <Button buttonName="Save" type="danger" />
            </form>
        </div>
    )
}
