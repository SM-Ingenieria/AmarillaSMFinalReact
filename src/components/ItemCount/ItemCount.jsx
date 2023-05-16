import React, { useState } from 'react'

import { useCounter } from '../../hook/useCounter'




const ItemCount = ({initial=1, stock=5, onAdd}) => {
   const {counter, handleSumar, handleRestar}=useCounter(initial,1,stock)
   
//    const [isCant,setIsCant]=useState(false)
   
   const handleonAdd = ()=> {
        onAdd()
    }
    return (
        <div className="border border-5 border-primary m-3">
   
            {/* con camelCase defino un evento */}
            <button onClick={handleSumar}>+ 1</button>
            <p>Clicks: {counter} </p>
            {/* <p>cantidad de renderizados: {renderCount.current}</p> */}
            <button onClick={()=>handleRestar()}>+ 1</button>
            <button onClick={()=>{onAdd(counter)}}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount