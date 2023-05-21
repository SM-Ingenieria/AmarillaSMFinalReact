

import { useState } from 'react'
// import { CartContext } from '../../Context/CarContext'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CarContext'
// import { CartContainer } from './components/CartContainer/CartContainer'

export const ItemDetail = ({ producto }) => {

  const [tieneCantidad, actualizarTieneCantidad]= useState(false)
  
  const [isCant, setIsCant] = useState(false)
  

  const { addToCart, cartList } = useCartContext()

  const onAdd = (cantidad) => {
    addToCart({ ...producto, cantidad })
    setIsCant(true)
  }

  console.log(cartList)



  return (
    <>
      {/* <div className="border border-5 border-primary m-3">Item Detail</div> */}
      <div>Item Detail</div>
      <div className="row">
        <div className="col">
          <img src={producto.foto} alt="imagen" />
          <h3>Nombre : {producto.name}</h3>
          <h3>Categoria : {producto.categoria}</h3>
          <h3>Precio : {producto.precio}</h3>
          <h3>ID: {producto.id}</h3>
        </div>
        <div className="col">
          {
            isCant ?
             <> 
              <Link className='btn btn-success' to = '/cart'>Terminar Compra </Link>
              <Link to={'/'} className="btn btn-outline-success">Seguir comprando</Link>

            </>
              :
            <>
              <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            </>
            
            
            //  //  !isCant ?
            //   <ItemCount onAdd={onAdd} />
            //   :
            //   <>
            //     <Link to={'/cart'} className="btn btn-outline-danger">Terminar compra</Link>
            //     <Link to={'/'} className="btn btn-outline-success">Seguir comprando</Link>

            //   </>
          }

        </div>
      </div>


    </>
  )
}
