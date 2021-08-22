import React from 'react'
import { Link } from 'react-router-dom'
import './navigationbar.style.css'
export default function NavigationBar() {
    return (
        <>
            <div className="row header">
                <div className="col-2">
                    <span className="logo">OnePlus</span>
                </div>
                <ul className="col-10 d-flex flex-row justify-content-around mt-3">
                    <li className="dropdown-menu"><Link>Phone</Link></li>
                    <li>TV</li>
                    <li>Store</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Community</li>
                    <li>Experience & Retails</li>
                    <Link to="/cart"><li>Cart</li></Link>
                    <li>Signup</li>
                </ul>
            </div>
            <div className="dropdown-menu-content">
                <a href="#">TV 24Inch</a>
                <a href="#">TV 28Inch</a>
                <a href="#">TV 32Inch</a>
                <a href="#">TV 36Inch</a>
                <a href="#">TV 54Inch</a>
            </div>
        </>
    )
}
