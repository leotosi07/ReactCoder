import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { db } from "../../services/firebase/firebaseconfig" 

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 
    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
            ? query(collection(db, 'Products'), where('category', '==', categoryId))
            : collection(db, 'Products');

        getDocs(collectionRef)
            .then(snaps => {
                const productsAdapted = snaps.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.log("Error al obtener productos:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]); 

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
};

export default ItemListContainer;
