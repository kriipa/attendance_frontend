import React from 'react'

export default function Capacity() {
    const capacityList = [
        {
            id: 1,
            title : "Emergency",
        },
        {
            id: 2,
            title : "OPD",
        },
        {
            id: 3,
            title : "MRI",
        },
        {
            id: 4,
            title : "XRay",
        },
        {
            id: 5,
            title : "Ultrasound",
        },
        {
            id: 6,
            title : "CT Scan",
        },
        {
            id: 7,
            title : "Lab Tests",
        },
        {
            id: 8,
            title : "Inpatients",
        },
    ]
    return (
        <div className='grid grid-cols-4 md:grid-cols-2 gap-4 my-6 '>
            {
                capacityList.map((capacity) => {
                    return(
                        <div className='bg-[#FCFCFD] p-6 rounded-lg flex flex-col items-center justify-center shadow-sm' key={capacity.id}>
                                <p className='text-[#E64400] text-4xl font-bold'>101</p>
                                <p className='text-[#005A80]  mt-3'>{capacity.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
