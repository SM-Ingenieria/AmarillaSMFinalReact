
import { createContext, useContext, useState } from "react";

import React from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
  
  const [cartList,setCartList] =useState([])

  const addToCart = (newProduct) => {
      
    setCartList({
          ...cartList,
          newProduct
      })
  }
  
  return (
  <CartContext.Provider value={{
    cartList,
    addToCart
    
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
