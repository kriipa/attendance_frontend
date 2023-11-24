import React, { useState } from 'react'
import VipNews from '../components/VipNews';

export default function VipCabin() {
    const [active, setActive] = useState("news");
    const newsData = [
        {
            id: 1,
            title: "VVIP and VIP cabin inspection by Honorable Health Minister Mohan Bahadur Basnet",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 2,
            title: "VVIP and VIP cabin inspection by Honorable Health Minister Mohan Bahadur Basnet",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 3,
            title: "VVIP and VIP cabin inspection by Honorable Health Minister Mohan Bahadur Basnet",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 4,
            title: "VVIP and VIP cabin inspection by Honorable Health Minister Mohan Bahadur Basnet",
            date : "Published Date: 2080/05/29",
        },
    ]

    const noticeData = [
        {
            id: 1,
            title: "Today at 4pm office will be closed",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 2,
            title: "Tommorow there is presentation",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 3,
            title: "No office this wednesday!",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 4,
            title: "Employees are requested to bring their own lunch ",
            date : "Published Date: 2080/05/29",
        },
    ]

    const eventsData = [
        {
            id: 1,
            title: "Meeting with dishHome",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 2,
            title: "Saraswoti puja in office",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 3,
            title: "Futsal on friday",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 4,
            title: "Office holiday on the 5th",
            date : "Published Date: 2080/05/29",
        },
    ]

    const vacancyData = [
        {
            id: 1,
            title: "2 people needed for Sr. UI/UX",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 2,
            title: "1 seat empty for go developer",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 3,
            title: "3 seat empty for django intern",
            date : "Published Date: 2080/05/29",
        },
        {
            id: 4,
            title: "1 react intern needed",
            date : "Published Date: 2080/05/29",
        },
    ]

    return (
        <div className='bg-[#E4E7EC] py-12 px-20 md:px-5  rounded-lg overflow-hidden'>
            <div className='bg-[#FCFCFD] rounded-lg rounded-b-lg'>
                <div className='grid grid-cols-4 text-center gap-[2px]  '>
                    <p className={`cursor-pointer p-2 rounded-s-lg ${active ==="news"? "bg-[#F6F7F9] text-[#005A80]": "bg-[#005A80] text-[#F6F7F9] "}`} onClick={() => setActive("news")}>News</p>
                    <p className={`cursor-pointer p-2  ${active ==="notices"? "bg-[#F6F7F9] text-[#005A80]": "bg-[#005A80] text-[#F6F7F9] "}`} onClick={() => setActive("notices")}>Notices</p>
                    <p className={`cursor-pointer p-2  ${active ==="events"? "bg-[#F6F7F9] text-[#005A80]": "bg-[#005A80] text-[#F6F7F9] "}`} onClick={() => setActive("events")}>Events</p>
                    <p className={`cursor-pointer p-2 rounded-e-lg  ${active ==="vacancies"? "bg-[#F6F7F9] text-[#005A80]": "bg-[#005A80] text-[#F6F7F9] "}`} onClick={() => setActive("vacancies")}>Vacancies</p>
                </div>
                <div>
                    {
                        active === "news" ? <VipNews data={newsData}/> : active === "notices" ? <VipNews data={noticeData}/> 
                        :  active === "events" ? <VipNews data={eventsData}/> : active === "vacancies" ? <VipNews data={vacancyData}/> : <p></p>
                    }
                    
                </div>
            </div>
        </div>
    )
}
