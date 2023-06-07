import { Link } from "react-router-dom"
import Item from "../Item/Item"
import { memo } from "react"


//memo -> memoriza estados y props

//memo -> memo(componente) -> (componente,fn Comparadora)

console.log('estoy en archivo itemlist')


const ItemList = memo ( ({productos})=> {
    // console.log('ItemList')    
    return (
          // <div>ItemList</div>
          <div style={{
              display:"flex",
              flexDirection:"row",
              flexWrap:"wrap"
          }}>
      
          {productos.map(producto=> <Item key={producto.id}{...producto}/>)}
          
          </div>
        )
      }
)
// si quisiera conocer el estado anterior y verificar como cambia descomento el siguiente
// , (valorAnteriorDeLaProps, valorPosteriorDeLaProps)=>console.log(valorAnteriorDeLaProps,valorPosteriorDeLaProps))

  
  export default ItemList 



// const ItemList = ({productos})=> {
//   return (
//     // <div>ItemList</div>
//     <div style={{
//         display:"flex",
//         flexDirection:"row",
//         flexWrap:"wrap"
//     }}>

//     {productos.map(producto=> <Item key={producto.id}{...producto}/>)}
    
//     </div>
//   )
// }

// export default ItemList 