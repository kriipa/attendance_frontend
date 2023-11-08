import React, {  useState } from 'react'

export default function Local() {
    const newArr = ['alina', 'bhup', 'cal', 'dontk'];
    const [data, setData] = useState();

    const handleStorage = () => {
        localStorage.setItem('items', JSON.stringify(newArr));
    }

    const handleGetStorage = () => {
        const showItem = localStorage.getItem('items');
        const takeItem = JSON.parse(showItem);
        setData(takeItem);
    }

    const result = newArr.filter(newArr => newArr.length>4);
    console.log("result", result);


    console.log("data", data);
    
    return (
        <div>
            <div>
                <button onClick={() => handleStorage()} className='bg-yellow-600'>ADD Item</button>
            </div>

            <div>
                <button onClick={() => handleGetStorage()} className='bg-green-600'>GET Item</button>
            </div>

            <div>
                {
                    data?.map((item) => {
                        return(
                            <div key={item}>
                                {item}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
