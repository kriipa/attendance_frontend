import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            identity : data.identity,
            password : data.password
        }
        axios.post("https://adminbackend.unentrance.com/auth/v1/account/login/", userData)
            .then((response) => {
                if(response.status===200){
                    navigate("/")
                }
                console.log("resp", response.status)
            })
    }

    return (
        <div>
            <form className='m-2' onSubmit={handleSubmit}>
                <div className='m-2'>
                    <p>Identity</p>
                    <input onChange={handleChange} className='border border-emerald-600 p-2 rounded-sm' placeholder="enter your identity" type="text" name="identity"/>
                </div>
                <div className='m-2'>
                    <p>Password</p>
                    <input onChange={handleChange} className='border p-2 border-emerald-600 rounded-sm' placeholder="enter your password" type="password" name="password" />
                </div>
                <button className='m-2 bg-emerald-900 text-white px-4 py-1 w-52 rounded-md' type='submit'>Submit</button>
            </form>
        </div>
    )
}
