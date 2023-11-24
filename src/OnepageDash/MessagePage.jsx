import React from 'react'
import TextComp from '../components/textComp'
import MessageComp from '../components/MessageComp'

export default function MessagePage() {
    return (
        <div className='bg-[#FCFCFC] pt-10 pb-20  px-28 md:px-6 md:pb-5 md:pt-5'>
            <TextComp title={"Message from Board Members"} para={"Read what our Board members have to say."}/>
            <MessageComp/>
        </div>
    )
}
