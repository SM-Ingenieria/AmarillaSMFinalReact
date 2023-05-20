import { Link } from "react-router-dom"
// import image from '../../../public/img/react.svg'
// import foto from '../../../public/img/remera1.svg'
import foto from "/img/react.svg"
import image from '/public/img/remera1.svg'
import { memo } from "react"


const Item = memo (({id,foto,name,precio,categoria}) => {
    console.log('Item')
    return (
    
        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap"
        }}>
            <div key={id} className="card w-30 h-30">
                <img src={foto} className="card-img-top w-10 h-10" alt="image-card" />
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
        </div>
    
    
    
    
    
    )
    }
)


export default Item