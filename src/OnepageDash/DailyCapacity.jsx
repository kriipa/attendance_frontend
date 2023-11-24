import React from 'react'
import TextComp from '../components/textComp'
import Capacity from '../components/Capacity'

export default function DailyCapacity() {
    return (
        <div className='bg-[#F2F4F7] px-14 md:px-5 py-10'>
            <TextComp title={"Daily Capacity"} para={"Following are the stats of the daily capacity in Aadarsha Hospital."}/>
            <Capacity/>
            <div className='flex justify-end'>
                <p className='text-[#667085] text-xs italic'>Published Date: 2080/05/29</p>
            </div>
        </div>
    )
}
