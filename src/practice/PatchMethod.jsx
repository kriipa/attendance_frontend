import React from 'react'
import axios from 'axios';


export default function PatchMethod() {
    
    axios.patch("https://adminbackend.unentrance.com/api/v1/course/update/792516f3-68ff-40d7-8dcf-605d27343fdb/", {
        name: 'DSA',
        isOptional: false,
        hasLevel : false,
        description : 'This is Course 1 description'
    })
        .then(response => console.log(response.data))
        .catch(err => console.error(err));
    return (
        <div>
            <div className='flex gap-2'>
                <p>Course Name :</p>
                <p>Optional Math</p>
            </div>
            <div className='flex gap-2'>
                <p>Description :</p>
                <p>You selected it yourself hahaa</p>
            </div>

            <input className='border p-2 rounded-md my-3' placeholder='insert course name' type="text" />
        </div>
    )
}
