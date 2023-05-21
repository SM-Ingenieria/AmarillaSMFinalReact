
import { createContext, useContext, useState } from "react";

import React from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
  
  const [cartList,setCartList] =useState([])

  const addToCart = (newProduct) => {
    
    const idx = cartList.findIndex(prod => newProduct.id === prod.id) // si encuentra manda -1 o la posicion



    if (idx === -1) {
      setCartList([
            ...cartList,
            newProduct
      ])
      
    } else {

      cartList[idx].cantidad = cartList[idx].cantidad + newProduct.cantidad
      setCartList([...cartList])
      
    }
    
    
  }
  const cantidadTotal = ( ) => cartList.reduce((total,objProducto)=> total +=objProducto.cantidad,0)

  const precioTotal =() => cartList.reduce((total,objProducto)=> total +=(objProducto.cantidad* objProducto.precio),0) //el reduce solo devuelve un valor

  const eliminarItem =(pid) => {
    //no puedo usar el triple igual distinto
    setCarlist(cartList.filter(prod => prod.id !== pid))
  } 

  const vaciarCarrito =() => {
    setCartList([])
  }
  return (
  <CartContext.Provider value={{
      cartList,
      addToCart,
      vaciarCarrito,
      precioTotal,
      cantidadTotal,
      eliminarItem
    
  }}>
    {children}

  </CartContext.Provider>
  )
}


// del profe
// import { createContext, useContext, useState } from "react"
// // crear un contexto inicializado con []
// // exportar app


// const CartContext = createContext([])

// export const useCartContext = () => useContext(CartContext)

// export const CartContextProvider = ({children})=> {
//     // estados y funciones globales
//     const [cartList, setCartList] = useState([])

//     const addToCart = (newProduct)=>{
//         // localStorage.setItem('cartList', cartList)
//         // manejar con base de dato ? 
        
//         // agregar logica de producto repetido
//         setCartList([
//             ...cartList,
//             newProduct
//         ])
//     }

//     // catidad total de productos
//     // precio total de la compra
//     // eliminar por item

//     // vaciarCarrtio
//     const vaciarCarrtio = () => {
//         setCartList([])
//     }

//     return (
//        <CartContext.Provider value={{
//             // estado y func intectados
//             cartList,
//             addToCart,
//             vaciarCarrtio
//        }}>
//             {children}
//        </CartContext.Provider>
//     )
// }
