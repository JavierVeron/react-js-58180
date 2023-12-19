import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where, limit } from "firebase/firestore";
import { useEffect, useState } from "react";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        // Consultando una collection completa
        getDocs(itemsCollection).then(snapshot => {
            setProductos(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})));
        });
        
        // Consultando una collection completa
        /* const productosFiltrados = query(itemsCollection, where("precio", ">", 3000), limit(1));
        getDocs(productosFiltrados).then(snapshot => {
            setProductos(snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})));
        }); */
    }, []);

    return (
        <div className="container">
            <div className="row">
                {productos.map(prod => (
                    <div key={prod.id} className="col">
                        <div className="card border-0">
                            <Link to={"/item/" + prod.id}><img src={prod.imagen} className="card-img-top" alt={prod.titulo} /></Link>
                            <div className="card-body">
                                <p className="card-text">{prod.titulo}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Productos;