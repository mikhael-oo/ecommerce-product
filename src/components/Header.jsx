import Logo from "./../images/logo.svg"
import CartImg from "./../images/icon-cart.svg"
import Avatar from "./../images/image-avatar.png"
import "./header.css"

import Cart from "./Cart"
import {useState} from "react"

export default function Header({ setCartCount }) {
    const [cartOpen, setCartOpen] = useState(false)

    function toggleCart() {
        setCartOpen(prev => !prev)
    }

    return (
       <header>
            <div className="logo-div">
                <img src={Logo} alt="Logo" />
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="cart-div">
                <a onClick={toggleCart}><img src={CartImg} alt="Cart" /></a>
                <a><img className="avatar" src={Avatar} alt="Avatar" /></a>
            </div>
            {cartOpen && <Cart setCartCount={setCartCount} />}
       </header>
    )
}