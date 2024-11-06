import { useState, useEffect } from "react"
import { getProducts,getProductsByCategory } from "../../mocks/asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        console.log("categoryId:", categoryId);
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>
                {greeting}
            </h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer