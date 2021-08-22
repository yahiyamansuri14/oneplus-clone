import React from 'react'
import ProductFront from './ProductFront'
import './product.style.css'
export default function Products() {
    return (
        <>
            <div className="row mt-3">
                <div className="offset-5 position-sticky">
                    <select className="select-custom">
                        <option>Categories</option>
                        <option>Phone</option>
                        <option>TV</option>
                        <option>Audio</option>
                        <option>Wearable</option>
                        <option>Power & cables</option>
                        <option>Gear</option>
                        <option>Bundles</option>
                    </select>
                    <select className="select-custom ml-5">
                        <option>All Devices</option>
                        <option>One Plus 5</option>
                        <option>One Plus 5t</option>
                        <option>One Plus 6</option>
                        <option>One Plus 6t</option>
                        <option>One Plus 7</option>
                        <option>One Plus 7pro</option>
                        <option>One Plus 7t</option>
                    </select>
                    <select className="select-custom ml-5">
                        <option>Default</option>
                        <option>Price:Low to High</option>
                        <option>Price:High to Low</option>
                        <option>New</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="product-container-parent">
                    <ProductFront></ProductFront>
                    <ProductFront></ProductFront>
                    <ProductFront></ProductFront>
                    <ProductFront></ProductFront>
                    <ProductFront></ProductFront>
                    <ProductFront></ProductFront>
                </div>
            </div>
        </>
    )
}
