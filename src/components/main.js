import React from 'react'

const page =
    <div className='main'>
        <header className='main-header'><h1>Fun facts about React</h1></header>
        <ul className='ul-list'>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>

export default function Main() {
    return (
        <>
            {page}
        </>

    )
}
