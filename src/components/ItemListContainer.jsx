import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        // Consultando una collection completa
        getDocs(itemsCollection).then(snapshot => {
            // Guardamos el Array de Productos de Firestore en el state "productos"
            setProductos(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))); 
        });
    }, []);

    return (
        <ItemList productos={productos} />
    )
}

export default ItemListContainer;