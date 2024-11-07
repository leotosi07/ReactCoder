import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { useState } from "react"
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded,setQuantityAdded] = useState(0)

    const { addToCart  } = useCartContext();

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        const item = {
            id,name,price
        }
        addToCart (item,quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripcion: {description}
                </p>
                <p className="Info">
                    Precio: $ {price}
                </p>
                <p className="Info">
                    Stock: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                {   
                    quantityAdded > 0 ? (
                        <Link to= '/cart' className="Option">Terminar compra</Link>
                    ):(
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }

            </footer>
        </article>
    )
}

export default ItemDetail