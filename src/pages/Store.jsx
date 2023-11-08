import React, { useState } from 'react'

export default function Store() {
    const [data, setData ]= useState();
    const storage = () => {
        localStorage.setItem('items', JSON.stringify("lokkkkku"));
    }
    const getItem = () => {
        const local = localStorage.getItem('items');
        const dataInsideFunction = JSON.parse(local)
        setData(dataInsideFunction)
        console.log(dataInsideFunction)
    }
    
    return (
        <div>
            <button onClick={() => storage()}>Store</button>
            <div>

                <button onClick={()=> getItem()}> Get</button>
            </div>

            <p>{data} </p>
        </div>
    )
}
