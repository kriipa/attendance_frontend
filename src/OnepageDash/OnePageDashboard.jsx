import React from 'react'
import FirstHalf from './FirstHalf'
import { CiLocationOn } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import Services from './Services';
import DailyCapacity from './DailyCapacity';
import OurDepartment from './OurDepartment';
import VipCabin from './VipCabin';
import MessagePage from './MessagePage';
import Footer from './Footer';

export default function OnePageDashboard() {
    return (
        <div>
            <div className='bg-[#FCFCFC]'>
                {/* Header */}
                <div className='flex justify-between bg-[#22244D] px-24 md:px-10 py-2'>
                    <div className='flex items-center gap-2 text-[#F4F7FB]'>
                        <CiLocationOn />
                        <p className='text-sm'>Thapathali, Kathmandu</p>
                    </div>
                    <div className='flex items-center gap-2 text-[#F4F7FB]'>
                        <IoMdPerson />
                        <button className='text-sm'>Login</button>
                    </div>
                </div>
                <div className='px-24 md:px-10 py-4 mt-4'>
                    <div className='mb-10'>
                        <FirstHalf/>
                    </div>
                    <div className='my-[78px]'>
                        <Services/>
                    </div>
                </div>
                <DailyCapacity/>
                <div className='px-10'>
                    <OurDepartment/>
                </div>
                <VipCabin/>
                <MessagePage/>
                <Footer/>
            </div>
        </div>
    )
}
