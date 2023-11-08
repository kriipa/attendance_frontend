import React, { useEffect, useState } from 'react'

export default function ListArray() {
    const arr = [{name:'rip'},{name: 'lin'}, {name:'san'}];

    const [data, setData] = useState();

    const handleAdd = () => {
        arr.push({name:'lina'});
    localStorage.setItem('array', JSON.stringify(arr));
    }

    const handleGet = () => {
        const getter = localStorage.getItem('array');
        const addItem = JSON.parse(getter);
        setData(addItem);
    }

    console.log(data);
    return (
        <div>
            <button onClick={() => handleAdd()} className='bg-green-400'> Add</button>
            <button onClick={() => handleGet()}> GET </button>

            <div>
                {
                    data?.map((item)=> {
                        return(
                            <p>
                                {item.name}
                            </p>
                        )
                    })
                }
            </div>

            {/* <div>
                {arr.filter(name => name.includes('i')).map(filteredName => (
                    <li>
                        {filteredName}
                    </li>
                ))}
            </div> */}
        </div>
    )
}
