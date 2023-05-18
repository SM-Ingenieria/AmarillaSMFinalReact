import { Link } from "react-router-dom"
// import image from '../../../public/img/react.svg'
// import foto from '../../../public/img/remera1.svg'
import foto from "/img/react.svg"
import image from '/public/img/remera1.svg'


const Item = ({id,foto,name,precio,categoria}) => {
    return (

        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap"
        }}>
            <div key={id} className="card w-70">
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
        </div>





    )
}

export default Item