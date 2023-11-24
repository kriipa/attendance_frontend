import React from 'react'
import birLogo from "../assets/images/bir1.png";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";

export default function Footer() {
    return (
        <div className='bg-[#E4E7EC] items-start grid grid-cols-3 md:grid-cols-1 md:gap-5 md:text-center px-20 pt-9 pb-11'>
            <div className='flex gap-2 md:flex-col md:items-center'>
                <img className='w-12'  src={birLogo} alt="logo" />
                <div>
                    <p className='text-[#005A80] text-base'>National Academy of Medical Sciences</p>
                    <p className='text-[#B33500] text-sm'>Aadarsha Hospital</p>
                </div>
            </div>
            <div>
                <p className='text-base text-[#005A80] mb-3'>Contact Address</p>
                <div className='flex flex-col gap-4 md:items-center '>
                    <div className='flex gap-4'>
                        <IoCallOutline />
                        <p className='text-xs text-[#475467]'>Mahaboudha, Kathmandu , Bagmati , Nepal</p>
                    </div>
                    <div className='flex gap-4'>
                        <CiMail />
                        <p className='text-xs text-[#475467]'>official.aadarshahospital@gmail.com</p>
                    </div>
                    <div className='flex gap-4'>
                        <CiLocationOn />
                        <p className='text-xs text-[#475467]'>+977-1-4221119, 4221988, 4222865</p>
                    </div>
                    <div className='flex gap-4'>
                        <CiGlobe />
                        <p className='text-xs text-[#475467]'>https://aadarshahospital.gov.np</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-base text-[#005A80] mb-3 '>Visit</p>
                <div className='flex flex-col gap-3 '>
                    <p className='text-xs text-[#475467]'>Our Services</p>
                    <p className='text-xs text-[#475467]'>Daily Capacity</p>
                    <p className='text-xs text-[#475467]'>Our Departments</p>
                    <p className='text-xs text-[#475467]'>News and Notices</p>
                    <p className='text-xs text-[#475467]'>Message from board members</p>
                </div>
            </div>
        </div>
    )
}
