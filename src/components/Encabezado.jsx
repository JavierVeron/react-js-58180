import { Link } from "react-router-dom";
import logo from "../assets/mcdonalds-logo.png";

const Encabezado = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to={"/"}>
                        <img src={logo} alt="McDonalds" width={180} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Encabezado;