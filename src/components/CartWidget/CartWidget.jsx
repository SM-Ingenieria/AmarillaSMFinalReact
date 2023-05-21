// import React from 'react'

import { useCartContext } from "../../Context/CarContext"

const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div>
        {cantidadTotal()}🛒
    </div>
  )
}

export default CartWidget
