import { useState, useEffect, createContext, useContext } from "react"


const CartContext = createContext()

export const { Provider } = CartContext

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [qtyItems, setQtyItems] = useState(0)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem('cart'))
        const localTotal = JSON.parse(localStorage.getItem('total'))
        const localQty = JSON.parse(localStorage.getItem('qty'))

        if (localCart && localTotal && localQty) {
            setCart(localCart)
            setTotal(localTotal)
            setQtyItems(localQty)
        }
    }, [])

    const isInCart = (id) => {
        return cart.find((elem) => elem.id === id)
    }

    const addToCart = (item, qty) => {
        const localTotal = total + item.price * qty;
        const localQty = qtyItems + qty;
        let localCart = []

        if (isInCart(item.id)) {
            localCart = cart.map((elem) => {
                if (elem.id === item.id) {
                    return { ...elem, qty: elem.qty + qty }
                } else {
                    return elem
                }
            })
        } else {
            localCart = [...cart, { ...item, qty }]
        }

        setTotal(localTotal)
        setQtyItems(localQty)
        setCart(localCart)

        localStorage.setItem('cart', JSON.stringify(localCart))
        localStorage.setItem('total', JSON.stringify(localTotal))
        localStorage.setItem('qty', JSON.stringify(localQty))
    }

    const removeItem = (id, price, qty) => {
        const localTotal = total - price * qty;
        const localQty = qtyItems - qty;
        const localCart = cart.filter((elem) => elem.id !== id);

        setTotal(localTotal);
        setQtyItems(localQty);
        setCart(localCart);

        localStorage.setItem('total', JSON.stringify(localTotal))
        localStorage.setItem('qty', JSON.stringify(localQty))
        localStorage.setItem('cart', JSON.stringify(localCart))
    }

    const clearCart = () => {
        setCart([])
        setTotal(0)
        setQtyItems(0)
        localStorage.removeItem('cart')
        localStorage.removeItem('total')
        localStorage.removeItem('qty')
    }

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSaveCart = () => {
        console.log("Saving in database")
        console.log("formData", formData)
        console.log("cart", cart)

        const ordersCollection = collection(db, "orders")
        const newOrder = {
            buyer: formData,
            items: cart,
            date: new Date(),
            total: total
        }


    }


    const contextValue = {
        qtyItems: qtyItems,
        total,
        cart,
        addToCart,
        clearCart,
        removeItem,
    }

    return <Provider value={contextValue}>{children}</Provider>
}

export default CartContextProvider;