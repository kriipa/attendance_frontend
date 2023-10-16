import React from 'react'
import { useState } from 'react'



export default function Form() {
    const [form, setForm] = useState({
        firstname : 'Lok',
        lastname : 'Tha',
        Age : '7',
        Role : 'Java Intern',
        email : 'lok@gmail.com',
        discord_id : 'lokii'
    });

    return (
        <div>
            <label >
                First Name:

            </label>
            <input className='border-2' 
            onChange={e => setNum1(e.target.value)}/>
            
            <button className='bg-red-200' 
            onClick={()=> handleAdd() }>
                +
            </button>

            <input className='border-2' 
            onChange={e => setNum2(e.target.value)}/>
            <p>adding {num1} + {num2} equals {sum} </p>
        </div>
    )
}
