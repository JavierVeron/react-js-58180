import { Link } from "react-router-dom";

const Item = ({prod}) => {
    return (
        <div key={prod.id} className="col">
            <div className="card border-1">
                <Link to={"/item/" + prod.id}><img src={prod.imagen} className="card-img-top" alt={prod.titulo} /></Link>
                <div className="card-body">
                    <p className="card-text">{prod.titulo}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;