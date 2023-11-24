import React, { useState } from 'react'
import TextComp from '../components/textComp'
import Dept from '../components/Dept'

export default function OurDepartment() {
    return (
        <div className='bg-[#FCFCFC]  pt-10 pb-20 px-12 md:px-0'>
            <TextComp title={"Our Departments"} para={"Following are the departments in Aadarsha Hospital."}/>
            <div>
                <Dept/>
            </div>
        </div>
    )
}
