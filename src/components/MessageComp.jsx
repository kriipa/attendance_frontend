import React from 'react'
import message1 from "../assets/images/message1.png";
import message2 from "../assets/images/message2.png";
import message3 from "../assets/images/message3.png";

export default function MessageComp() {
    const messageList = [
        {
            id : 1,
            img : message1,
            name : "Kamal Thapa",
            position : "Under Secretary Administration",
            message : "A beacon of healing and compassion in the heart of our community. Nestled amidst serene gardens and state-of-the-art facilities, our hospital is dedicated to providing world-class healthcare with a personalized touch.",
        },
        {
            id : 1,
            img : message2,
            name : "Kamal Thapa",
            position : "Under Secretary Administration",
            message : "A beacon of healing and compassion in the heart of our community. Nestled amidst serene gardens and state-of-the-art facilities, our hospital is dedicated to providing world-class healthcare with a personalized touch.",
        },
        {
            id : 1,
            img : message3,
            name : "Kamal Thapa",
            position : "Under Secretary Administration",
            message : "A beacon of healing and compassion in the heart of our community. Nestled amidst serene gardens and state-of-the-art facilities, our hospital is dedicated to providing world-class healthcare with a personalized touch.",
        },
    ]
    return (
        <div className='grid grid-cols-3 md:grid-cols-1 gap-20 md:gap-4'>
            {
                messageList.map((messages) => {
                    return(
                        <div className='flex flex-col gap-4 items-center mt-10 md:mt-5 justify-evenly' key={messages.id}>
                            <div className=''>
                                <img className='items-center h-40' src={messages.img} alt="Picture" />
                            </div>
                            <div className='flex flex-col items-center gap-1'>
                                <p className='text-[#475467] text-sm'>{messages.name}</p>
                                <p className='text-[#0076D3] text-sm mb-3'>{messages.position}</p>
                                <p className='text-[#344054] text-xs italic text-center leading-8'>“{messages.message}”</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    )
}
