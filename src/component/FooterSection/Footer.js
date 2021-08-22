import React from 'react'
import './footersection.style.css'
export default function Footer() {
    return (
        <>
            <div className="footer-div">
                <div className="row ml-5 mr-5">
                    <div className="col d-flex flex-column align-items-start footer-item-container">
                        <span><b>Phones</b></span>
                        <span>OnePlus Nord 2 5G</span>
                        <span>OnePlus 9 Pro 5G</span>
                        <span>OnePlus 9 5G</span>
                        <span>OnePlus 9R 5G</span>
                        <span>OnePlus Nord CE 5G</span>
                        <span>OnePlus 8T</span>
                        <span>OnePlus Nord</span>
                        <span>OnePlus 8 Pro</span>
                    </div>
                    <div className="col d-flex flex-column align-items-start footer-item-container">
                        <span><b>Accessories</b></span>
                        <span>Wearables</span>
                        <span>Cases & Protection</span>
                        <span>Power & Cables</span>
                        <span>Audio</span>
                        <span>Bundle</span>
                        <span>Gear</span>
                    </div>
                    <div className="col d-flex flex-column align-items-start footer-item-container">
                        <span><b>Programs</b></span>
                        <span>Exchange Program</span>
                        <span>Education Benefits</span>
                        <span>Referral Program</span>
                        <span>Shot on OnePlus</span>
                        <span>OnePlus Sotre App</span>
                        <span>OnePlus Friday</span>
                    </div>
                    <div className="col d-flex flex-column align-items-start footer-item-container">
                        <span><b>Support</b></span>
                        <span>Shopping FAQs</span>
                        <span>User Manuals</span>
                        <span>Service Centers</span>
                        <span>Repair Service</span>
                        <span>Contact Us</span>
                    </div>
                    <div className="col d-flex flex-column align-items-start footer-item-container">
                        <span><b>Company</b></span>
                        <span>About OnePlus</span>
                        <span>Community</span>
                        <span>Careers</span>
                        <span>Press</span>
                        <span>Blogs</span>
                    </div>
                </div>
            </div>
        </>
    )
}
