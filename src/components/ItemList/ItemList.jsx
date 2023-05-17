import { Link } from "react-router-dom"
import Item from "../Item/Item"


const ItemList = ({productos})=> {
  return (
    // <div>ItemList</div>
    <div style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap"
    }}>

    {productos.map(producto=> <Item key={producto.id} producto ={producto}/>)}
    
    </div>
  )
}

export default ItemList