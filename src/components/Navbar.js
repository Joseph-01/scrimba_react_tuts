import React from "react"
// import { ReactDOM } from "react"
import Logo from "../images/download.png"



export default function Navbar() {
    return (
        <>
            <header>
                <nav className="nav-header">
                    <div className="logo-title">
                        <img className="logo" src={Logo} alt="react logo" />
                        <p>RealFacts</p>
                    </div>
                    <p>React Course - Project 1</p>
                    {/* <ul className="nav-list">
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/contact">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul> */}
                </nav>
            </header>
        </>
    )
}