import React, { useState } from 'react'
import {FiEdit} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

export default function Card({id, title, body}) {
    const navigate = useNavigate();
    const [selectedId, setSelectedID] = useState();

    const handleEdit= (id) => {
        console.log("id",id)
        navigate("/edit", { state: { id:id, title:title, body:body } });
    }
    return (
        <div className='m-3 border border-cyan-700 w-1/4 flex flex-col px-3 py-2 rounded-md hover:shadow-lg'>
            <div className='flex justify-between mb-2'>
                <h5 className='text-center text-white bg-cyan-800 px-3 py-1 rounded-2xl'>{id}</h5>
                <div onClick={()=>handleEdit(id)} className='justify-end hover:text-blue-500 cursor-pointer'><FiEdit/></div>
            </div>
            <h3 className='text-lg mb-2 '>
                {title?.length >= 15? title.slice(0,15) : title}
                {title?.length >= 15? "..." : ""} 
            </h3>
            <p className='text-stone-600 text-left'>
                {body?.length >= 100? body.slice(0,100) : body}
                {body?.length >= 100? "..." : ""}
            </p>
        </div>
    );
}
