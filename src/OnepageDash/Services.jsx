import React from 'react'
import ServiceCard from '../components/ServiceCard'
import TextComp from '../components/textComp'

export default function Services() {
    return (
        <div className='flex flex-col gap-10'>
            <TextComp title={"Our Services"} para={"Following are the services offered by Aadarsha Hospital."}/>
            <div className=''>
                <ServiceCard/>
            </div>
        </div>
    )
}
