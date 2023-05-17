

import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
// import { CartContainer } from './components/CartContainer/CartContainer'

export const ItemDetail = () => {
  const [isCant, setIsCant] = useState(false)
  const onAdd =(cantidad) => {
    console.log('cantidad seleccionada : ', cantidad)
    setIsCant(true)
  }
  return (
    <>
      <div className="border border-5 border-primary m-3">Item Detail</div>

      {
        !isCant?
        <ItemCount onAdd={onAdd}/>
        :
        <>
        <Link to={'/cart' } className="btn btn-outline-danger">Terminar compra</Link>
        <Link to={'/'} className="btn btn-outline-success">Seguir comprando</Link>
        {/* <Button to={'/'} className="btn btn-outline-danger">Terminar compra</Button>
        <Button to={'/'}className="btn btn-outline-danger">Seguir comprando</Button> */}
        </>
      }
      
    </>
  )
}
