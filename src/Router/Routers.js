import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../component/CartSection/Cart'
export default function Routers() {
    return (
        <Router>
            <Route path="/" component={Home} exact></Route>
            <Route path="/cart" component={Cart}></Route>
        </Router>
    )
}
