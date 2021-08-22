import React from 'react'
import Slider from '../component/Slider'
import NavigationBar from '../component/NavigationBar/NavigationBar'
import Products from '../component/Products/Products'
import Footer from '../component/FooterSection/Footer'
import Cart from '../component/CartSection/Cart'
export default function Home() {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Slider className="mt-5"></Slider>
            <Products></Products>
            <Footer></Footer>
            {/* <Cart></Cart> */}
        </>
    )
}
