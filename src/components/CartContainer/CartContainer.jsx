import React from 'react'
import { useCartContext } from '../../Context/CarContext'

export const CartContainer = () => {

  const { cartList, vaciarCarrito } = useCartContext()


  return (
    <div>

      {cartList.map(prod => (
        <div>

          <img className="w-25" src={prod.foto} alt="imagen" />
          <label>Cantidad: {prod.cantidad} -</label>
          <label>Precio: {prod.precio} </label>
          <button>X</button>
        </div>
      ))}
      <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar Carrito</button>
    </div>
  )
}


