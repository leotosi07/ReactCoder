import { CartIcon } from '../Icons/Icons'
import './CartWidget.css'
import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {
    const { qtyItems } = useCartContext()

    return (
        <section className="Cart">
            <div className="cart-icon-container">
                <Link to="/cart">
                    <CartIcon />
                    {qtyItems > 0 && <span className="qtyItems">{qtyItems}</span>}
                </Link>
            </div>
        </section>
    );
}

export default CartWidget;
