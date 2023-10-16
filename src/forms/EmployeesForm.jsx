import React, { useState } from 'react'

export default function EmployeesForm() {
    const [form, setForm] = useState({
        firstName : '',
        lastName : '',
        address : '',
        email : '',
        discordId : '',
        role : '',
    });

    const EmpList = [
        {
            id : 1,
            title : 'First Name',
            key : 'firstName',
            placeholder : 'Enter your first name',
        },
        {
            id : 2,
            title : 'Last Name',
            key : 'lastName',
            placeholder : 'Enter your last name',
        },
        {
            id : 3,
            title : 'Address',
            key : 'address',
            placeholder : 'Enter your address',
        },
        {
            id : 4,
            title : 'Email',
            key : 'email',
            placeholder : 'Enter your email',
        },
        {
            id : 5,
            title : 'Discord Id',
            key : 'discordId',
            placeholder : 'Enter your discord id',
        },
        {
            id : 6,
            title : 'Role',
            key : 'role',
            placeholder : 'Enter your role',
        },
    ]

    console.log(form)
    return (
        <div className='flex justify-center mt-16'>
            <div className='border-2  border-slate-400 rounded-xl w-[600px] p-4 px-14 flex flex-wrap gap-[4%]'>
                <div className='flex justify-center w-[100%] mb-8 '>
                    <b className='text-2xl'> Create Employees </b>
                </div>
                {
                    EmpList.map((employees) => {
                        return(
                                <div className=' w-[48%] pb-5' key={employees.id}>
                                    <p className='text-sm'> {employees.title}</p>
                                    <input className='border-2 w-full border-gray-300 rounded-md p-2 mt-1 text-sm'
                                    placeholder={employees.placeholder} type="text" 
                                    value={form.key}
                                    onChange={e => { setForm({
                                        ...form,
                                        [employees?.key] : e.target.value
                                    });
                                    }}/>
                                </div>
                        )
                    })
                }
                <div className='flex justify-end w-[100%]'>
                    <button className='inline-block p-1 mt-4  w-56 rounded-md hover:bg-gray-600 bg-sky-900 hover:shadow-md text-white'>Submit</button>
                </div>
                {/* <p>{form.address}</p> */}
            </div>
        </div> 
    )
}
