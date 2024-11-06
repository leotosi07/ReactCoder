import { useState,useEffect } from "react"
import { getProductById } from "../../mocks/asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null)

    useEffect(()=>{
        getProductById('1')
            .then (response =>{
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer