import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

export default function VipNews({data}) {

    return (
        <div className='bg-[#FCFCFD] p-4 rounded-lg '>
            {
                data.map((item) => {
                    return(
                        <div key={item.id} className='p-4 mb-4 flex rounded-xl justify-between bg-[#F6F7F9]'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-[#344054] text-sm'>{item.title}</p>
                                <p className='text-[#667085] text-xs'>{item.date}</p>
                            </div>
                            <button className='flex items-center whitespace-nowrap text-[#0076D3] text-xs border rounded-2xl h-7 px-2 border-[#0076D3]'>Read More  <IoIosArrowForward /></button>
                        </div>
                    )
                })
            }
            
        </div>
    )
}
