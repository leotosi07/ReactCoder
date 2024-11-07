import { useCartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection, doc, updateDoc, getDoc } from "@firebase/firestore";
import { db } from "../../services/firebase/firebaseconfig" ;
import Swal from 'sweetalert2';
import { Loader } from "../Loader/Loader";
import './Cart.css'

const Cart = () => {
    const { qtyItems, cart, total, removeItem, clearCart } = useCartContext();
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: "", tel: "", email: "" });
    const [loading, setLoading] = useState(false);  
    const navigate = useNavigate();

    const handleRemoveItem = (id, price, qty) => {
        removeItem(id, price, qty);
    }

    const handleClearCart = () => {
        clearCart();
    }

    const handleGotoform = () => {
        setShowForm(true);
    };

    const handleOnChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSaveCart = () => {
        setLoading(true); 
        const ordersCollection = collection(db, "Orders");
        const newOrder = {
            buyer: formData,
            items: cart,
            date: new Date(),
            total: total
        };

        addDoc(ordersCollection, newOrder)
            .then((docRef) => {
                cart.forEach(async ({ id, qty }) => {
                    const productRef = doc(db, "Products", id);
                    const productDoc = await getDoc(productRef);
                    if (productDoc.exists()) {
                        const productData = productDoc.data();
                        const newStock = productData.stock - qty; 
                        
                        await updateDoc(productRef, {
                            stock: newStock
                        });
                    }
                });

                setLoading(false); 
                Swal.fire({
                    title: '¡Compraste en Premium Pet Shop!',
                    text: `Tu número de orden es: ${docRef.id}. ¡Gracias por tu compra!`,
                    icon: 'success',
                    confirmButtonText: "Aceptar",
                }).then(() => {
                    clearCart();
                    setFormData({ name: "", tel: "", email: "" });
                    navigate("/");
                });

                console.log("Order saved with id: " + docRef.id);
            })
            .catch((error) => {
                setLoading(false); 
                console.error("Error adding document: ", error);
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al guardar la orden. Intenta nuevamente.',
                    icon: 'error',
                    confirmButtonText: 'Cerrar'
                });
            });
    };

    if (qtyItems === 0) {
        return (
            <div className="cart-empty">
                <h1> ¡Ups... tu carrito está vacío! </h1>
            </div>
        )
    }

    return (
        <div className="cart-container">
            {loading && <Loader />}
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.map(({ id, name, price, qty }, index) => {
                        return (
                            <tr key={index}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>${price}</td>
                                <td>{qty}</td>
                                <td>
                                    <button className="remove-item-btn" onClick={() => handleRemoveItem(id, price, qty)}>
                                        x
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td colSpan={4}>Precio total</td>
                        <td> ${total} </td>
                    </tr>
                </tbody>
            </table>
            <button className="clear-cart-btn" onClick={handleClearCart}>Limpiar Carrito</button>
            {!showForm && (
                <button className="continue-btn" onClick={handleGotoform}>
                    Continuar compra
                </button>
            )}

            {showForm && (
                <div className="form-container">
                    <section className="form">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="name" id="name" placeholder="Ingrese su nombre" onChange={handleOnChange} />

                        <label htmlFor="phone">Teléfono:</label>
                        <input type="number" name="tel" id="tel" placeholder="Ingrese su telefono" onChange={handleOnChange} />

                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Ingrese su email" onChange={handleOnChange} />

                        <button className="submit-btn" onClick={handleSaveCart}>Finalizar Compra</button>
                    </section>
                </div>
            )}
        </div>
    );
}

export default Cart;
