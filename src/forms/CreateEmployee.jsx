import React, { useState } from 'react'

export default function CreateEmployee() {
    const [form, setForm] = useState({
        firstName : '',
        lastName : '',
        age : '',
        address : '',
        email : '',
        doscordId : '',
        role : '',
    });

    const FormList = [
        {
            title:'First Name',
            id : 1,
            key:'firstName',
            placeholder : "enter first name",
        },
        {
            title:'Last Name',
            id : 11,
            key: 'lastName',
            placeholder : "enter last name",
        },
        {
            title:'Age',
            id : 111,
            key: 'age',
            placeholder : "enter your age",
        },

    ]
    console.log("form",form)
    const storage = () => {
        console.log("clicked")
        // localStorage.setItem('employees', JSON.stringify(form));
    }
    const hello =()=>{
        console.log("hello")
    }
    return (
        <div className='border-2 w-[300px] flex justify-center'>
            <div>
            {
                FormList.map((emp) => {
                        return(
                            <div className=' p-2 '>
                                <div key={emp.id}>
                                    <p>{ emp.title }</p>
                                        <input className='border-2' placeholder={emp.placeholder} 
                                        value={form.key}
                                        onChange={e => {
                                            setForm({
                                                ...form,
                                                [emp?.key]: e.target.value
                                            });
                                        }}
                                        type="text" />
                                </div>
                                
                            </div>
                        )
                    }
                )
            }
            <p onClick={()=>console.log("hello")}> Submit </p>
            </div>
        </div>
    )
}
