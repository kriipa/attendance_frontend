import React from 'react'
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";

export default function ContactPeople() {
    const contactList = [
        {
            id : 1,
            img : person1,
            name : "Dr. Aadarsha Lamichhane",
            role : "Director"
        },
        {
            id : 2,
            img : person2,
            name : "Kamal Thapa",
            role : "Under Secretary Administration"
        },
        {
            id : 3,
            img : person3,
            name : "Ashok Darji",
            role : "Head Doctor"
        },
    ]
    return (
        <div className='rounded-lg shadow p-2'>
            {
                contactList.map((contact) => {
                    return(
                        <div className='flex gap-4 bg-[#F6F7F9] m-1 rounded-xl p-2 items-center' key={contact.id}>
                            <img className='rounded-2xl object-fill' src={contact.img} alt="" />
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs text-[#475467]'>{contact.name}</p>
                                <p className='text-xs text-[#0076D3] line-clamp-1'>{contact.role}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
