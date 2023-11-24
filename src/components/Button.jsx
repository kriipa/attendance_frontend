import React from 'react'

export default function Button({buttonName, type, handleClick}) {
    return (
        <div>
            <button onClick={(e) => {handleClick? handleClick() : e.preventDefault()}} className={`bg-gray-700 hover:bg-gray-600 p-2 px-4 rounded text-white ${type==="danger"?" border bg-red-600 hover:bg-red-500  text-white" : ""}`}>{buttonName}</button>
            {/* <button className={`bg-gray-700 p-2 m-2 rounded text-white ${type==="danger"?" bg-red-600" : ""}`}>{buttonName}</button> */}
        </div>
    )
}
