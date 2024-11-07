import { useState, useEffect } from "react"
import { getDoc, doc } from "firebase/firestore" 
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import { db } from "../../services/firebase/FirebaseConfig" 

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true) 

    const { itemId } = useParams() 

    useEffect(() => {
        setLoading(true)

        const productRef = doc(db, "Products", itemId)

        getDoc(productRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() })
                } else {
                    console.log("No such product!")
                }
            })
            .catch((error) => {
                console.error("Error getting product: ", error)
            })
            .finally(() => {
                setLoading(false) 
            })
    }, [itemId]) 

    if (loading) {
        return <div>Loading...</div>
    }

    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} /> {}
        </div>
    )
}

export default ItemDetailContainer
