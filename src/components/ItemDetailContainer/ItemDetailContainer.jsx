import { useState,useEffect } from "react"
import { getProductById } from "../../mocks/asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
            .then (response =>{
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer