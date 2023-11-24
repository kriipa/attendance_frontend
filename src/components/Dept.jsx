import React from 'react'

export default function Dept() {
    const deptList = [
        {
            id : 1,
            title : "Cardiology",
        },
        {
            id : 1,
            title : "Cardiology",
        },
        {
            id : 1,
            title : "Cardiology",
        },
        {
            id : 1,
            title : "Cardiology",
        },
        {
            id : 1,
            title : "Cardiology",
        },
        {
            id : 1,
            title : "Cardiology",
        },
        {
            id : 1,
            title : "Cardiology",
        },
        {
            id : 1,
            title : "Cardiology",
        },
        {
            id : 1,
            title : "Cardiology",
        },
        {
            id : 1,
            title : "Cardiology",
        },
    ]
    return (
        <div className='grid grid-cols-5 md:grid-cols-2 gap-4 mt-10'>
            {
                deptList.map((dept) => {
                    return(
                        <div className='' key={dept.id}>
                            <div className='bg-[#F6F7F9] rounded-lg py-4 flex flex-col justify-between items-center shadow-sm'>
                                <div className='rounded-full h-20 w-20 bg-[#E4E7EC]'></div>
                                <p className='text-[#005A80] text-sm'>{dept.title}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
