const Buscador = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Busca tu Producto!" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buscador;