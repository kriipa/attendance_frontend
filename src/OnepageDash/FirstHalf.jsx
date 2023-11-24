import React from 'react';
import birLogo from "../assets/images/bir1.png";
import firstPic from "../assets/images/collegePic.png";
import EmergencyContact from './EmergencyContact';

export default function FirstHalf() {
    return (
        <div>
            <div className='flex gap-2 items-center mb-5'>
                <img src={birLogo} alt="logo" />
                <div>
                    <p className='text-[#005A80] text-lg'>National Academy of Medical Sciences</p>
                    <p className='text-[#B33500] text-sm'>Aadarsha Hospital</p>
                </div>
            </div>
            <div className='flex md:flex-wrap gap-6'>
                <div className='w-[888px] '>
                    <img className='' src={firstPic} alt="college photo" />
                    <p className='mt-6 text-sm text-[#344054] leading-7'>
                        Welcome to St. Mercy Medical Center, a beacon of healing and compassion in the heart of our community. 
                        Nestled amidst serene gardens and state-of-the-art facilities, our hospital is dedicated to providing 
                        world-class healthcare with a personalized touch. From the moment you step through our doors, 
                        you are greeted by a team of skilled and empathetic professionals committed to your well-being. 
                        Our cutting-edge medical technology, coupled with a comprehensive range of services, ensures that 
                        we deliver top-notch care across specialties, from emergency medicine to advanced surgical procedures.
                    </p>
                </div>
                <div className='md:w-full'>
                    <EmergencyContact/>
                </div>
            </div>
        </div>
    )
}
