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
            placeholder : "Enter staff's  first name",
        },
        {
            id : 2,
            title : 'Last Name',
            key : 'lastName',
            placeholder : "Enter staff's  last name",
        },
        {
            id : 3,
            title : 'Address',
            key : 'address',
            placeholder : "Enter staff's address",
        },
        {
            id : 4,
            title : 'Email',
            key : 'email',
            placeholder :"Enter staff's  email",
        },
        {
            id : 5,
            title : 'Discord Id',
            key : 'discordId',
            placeholder : "Enter staff's discord id",
        },
        {
            id : 6,
            title : 'Staff Id',
            key : 'staffId',
            placeholder : "Enter staff's Id",
        },
        {
            id : 7,
            title : 'Role',
            key : 'role',
            placeholder : 'Enter your role',
        },
    ]

    const [data, setData] = useState();

    console.log(form)

    const storage = () => {
        localStorage.setItem('employees', JSON.stringify(form));
    }

    const getEmployees = () => {
        const emp = localStorage.getItem('employees');
        const empData = JSON.parse(emp);
        setData(empData);
    }
    console.log(data)

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
                    <button
                        onClick={()=>storage()}
                        className='inline-block p-1 mt-4  w-56 rounded-md hover:bg-gray-600 bg-sky-900 hover:shadow-md text-white'>
                        Submit
                    </button>
                    
                    <button
                        onClick={()=>getEmployees()}
                        className='inline-block p-1 mt-4  w-56 rounded-md hover:bg-gray-600 bg-pink-900 hover:shadow-md text-white'>
                        Get
                    </button>
                </div>
            </div>
            <div>
            
                <p>First Name : {data && data?.firstName}</p>
                <p>Last Name : {data && data?.lastName}</p>
                <p>Address : {data && data?.address}</p>
                <p>Email : {data && data?.email}</p>
                <p>Discord ID : {data && data?.discordId}</p>
                <p>Role : {data && data?.role}</p>
            </div>
        </div> 
    )
}
