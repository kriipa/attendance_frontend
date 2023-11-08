import axios from 'axios';
import React, { useState } from 'react'

export default function PostMethod() {
    const [data, setData] = useState({
        identity: "",
        password: ""
    });
    const [loginResponse, setloginResponse] = useState();

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name] : value
        });
    }
    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            identity: data.identity,
            password: data.password
        };
        axios.post("https://adminbackend.unentrance.com/auth/v1/account/login/", userData)
            .then((response) => {
                console.log(response.status, response.data.token);
                // console.log("response", response);
                setloginResponse(response.data);
        });
    }

    console.log("login response",loginResponse);

    return (
        <div>
            <form className='m-2' onSubmit={handleSubmit}>
                <div className='m-2'>
                    <p>Identity</p>
                    <input onChange={handleChange} className='border border-slate-700 p-2 rounded-sm' placeholder="enter your identity" type="text" name="identity"/>
                </div>
                <div className='m-2'>
                    <p>Password</p>
                    <input onChange={handleChange} className='border p-2 border-slate-700 rounded-sm' placeholder="enter your password" type="password" name="password" />
                </div>
                <button className='m-2 bg-zinc-700 text-white px-4 py-1 rounded-md' type='submit'>Submit</button>
            </form>

            <div>
                <p>{loginResponse?.data?.user?.email}</p>
                <p>{loginResponse?.data?.user?.id}</p>
            </div>
        </div>
    )
}
