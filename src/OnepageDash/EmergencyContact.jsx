import React from 'react'
import ContactPeople from '../components/ContactPeople'
import emergency from "../assets/images/emergency.png";

export default function EmergencyContact() {
    return (
        <div>
            <div className='w-80 md:w-full shadow rounded-lg'>
                <div className='flex gap-3 py-2 px-4 rounded-t-lg bg-[#005A80]'>
                    <img className='bg-white rounded-2xl' src={emergency} alt="emergency" />
                    <p className='text-[#FCFCFD] ms-1' >Emergency Contact</p>
                </div>
                <div className='py-4 px-4 flex flex-col gap-2'>
                    <p className='text-[#344054] text-sm'>In case of emergency, Call  
                        <span className='text-[#0076D3] text-sm ms-1'>+977-984633445</span>
                    </p>
                    <p className='text-[#344054] text-sm'>
                        We're at your service 24*7
                    </p>
                </div>
            </div>
            <div className='mt-4'>
                <ContactPeople/>
            </div>
        </div>
    )
}
