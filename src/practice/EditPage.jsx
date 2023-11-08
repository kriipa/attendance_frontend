import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function EditPage() {
    const [data, setData] = useState({
        title : "",
        body : ""
    });

    const location = useLocation();

    console.log("location", location);
    
    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name] : value
        })
    }
    return (
            <form className='gap-3' action="">
                <input onChange={handleChange} className='border p-2' name='title' type="text" placeholder='enter title' defaultValue={location.state.title} />
                <input onChange={handleChange} className='border p-2' name='body' type="text" placeholder='enter body' defaultValue={location.state.body} />

                <button className='bg-gray-600 p-2 text-white rounded-sm'>Submit</button>
            </form>
    )
}
