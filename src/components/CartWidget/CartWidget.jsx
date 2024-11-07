import { CartIcon } from '../Icons/Icons'
import './CartWidget.css'
import { useCartContext } from "../../context/CartContext"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



function CartWidget (){

    const { qtyItems } = useCartContext()


    return (
        <section className="Cart">
                <div className="cart-icon-container">
                    <Link to="/cart">
                    <CartIcon/>
                    </Link>
                    <span className="qtyItems">{qtyItems}</span>
                </div>
        </section>
    );
}

export default CartWidget;