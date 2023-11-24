import React from 'react'

export default function TextComp({title, para}) {
    return (
        <div>
            <div className='flex flex-col items-center gap-2'>
                <h4 className='text-[#005A80] text-xl font-bold'> {title} </h4>
                <p className='text-[#344054] text-sm'>{para}</p>
            </div>
        </div>
    )
}
