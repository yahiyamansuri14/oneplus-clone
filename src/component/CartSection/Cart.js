import React from 'react'
import './cart.style.css'
export default function Cart() {
    return (
        <>
            <div className="container-fluid cart-container">
                <div className="row cart-image-container">
                    <div className="col-6 border">
                        <img src="https://image01.oneplus.net/ebp/202010/14/1-m00-1b-7a-rb8bwl-gzgwaipfxaanmoacu_ds326.png" className="img-fluid" alt="..." />
                    </div>
                    <div className="col-6 border cart-detail-container">
                        <p className="h2 mt-5 pt-5">OnePlus Bullets Wireless Z Series Bass Blue - Bass Edition</p>
                        <hr></hr>
                        <p style={{ 'color': '#000', 'font-size': '20px', 'margin-top': '20px' }}>Enter pincode for delivery details</p>
                        <div className="pincode-details d-flex flex-row">
                            <input type="text" placeholder="enter pincode" size="30" className="pincode-input"></input>
                            <button className="ml-3  pincode-button"><span className="">Check</span></button>
                        </div>
                        <div className="color-select-div d-flex flex-row flex-wrap justify-content-start mt-4">
                            <div className="color-select-box border p-3 text-secondary">Reverb Red - Bass Edition</div>
                            <div className="color-select-box border ml-3 p-3 text-secondary">Bold Black - Bass Edition</div>
                            <div className="color-select-box border ml-2 p-3 mt-3 text-secondary">Bass Blue - Bass Edition</div>
                        </div>
                        <div className="pricing-box mt-5 d-flex flex-column align-items-start">
                            <div>
                                <p className="h3">$1999 <span className="h5 text-secondary"><strike>M.R.P. $2199</strike></span></p>
                                <p className="h6">Inclusive of all taxes</p>
                            </div>
                            <div className="mt-4">
                                <button className="add-to-cart">Add to Cart</button>
                            </div>
                            <div className="mt-4">
                                <p className="h6">Availability : In Stock</p>
                                <p className="h6 text-secondary">Sold by Mobitech Creations Private Limited</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" row description-image-1">
                    <img src="https://oasis.opstatics.com/content/dam/oasis/page/product/accessories/audio/oneplus-bullets-wireless-z/bwzu_top2_update.jpeg.transform/scale-50/image.jpeg" alt="..." />
                    <div className="description-text-1 offset-2">
                        <p className="h2">Charge for 10 minutes,<br></br>
                            Enjoy for 1 hours.
                        </p>
                        <p className="mt-5 h5">OnePlus Bullets Wireless Z Series</p>
                        <span className="h6 mt-2">Learn More</span>
                        <p className="h6" style={{ 'margin-top': '120px' }}>Photos and illustrations concern both the Bullets<br></br>
                            Wireless Z and Bass Edition models. Please refer<br></br> to our product page
                            for that of specific models.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
