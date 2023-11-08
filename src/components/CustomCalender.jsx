import { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

function CustomCalender() {
    return (
        <div>
            <div className=' p-5'>
                <Calendar className="h-full max-w-full  rounded-xl " />
            </div>
        </div>
    );
}

export default CustomCalender;
