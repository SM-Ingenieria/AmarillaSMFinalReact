

const ItemList = (productos)=> {
  return (
    // <div>ItemList</div>
    <div style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
    }}>

    {productos.map(({id, foto,name, precio, categoria}) => <div key={id} className="card w-25">
                                       <img src={foto} className="card-img-top " alt="image-card" />
                                       <div className="card-body">
                                          <h6>Nombre: {name}</h6>
                                          <label>Precio: {precio}</label>
                                          <label>Categoria: {categoria}</label>
                                        </div>  
                                          <div className="card-footer">
                                              <Link to={`/detail/${id}`}>
                                              <button className="btn btn-outline-dark">Detalle</button>
                                              </Link>
                                          </div>
                                       
                                  </div>
                                  )}
    </div>
  )
}

export default ItemList