import { useEffect, useState } from "react";
import { mFetch } from "../utils/mFetch";
import { Link, useParams } from "react-router-dom";


import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ greeting, children }) => {
  
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {categoria} = useParams()
  console.log(categoria) 

  useEffect(() => {
    if (!categoria) {
      
      mFetch()
        .then(resultado => {
          setProductos(resultado)
        })
        
        .catch(error => console.log(error))
        //punto *
        .finally(() => setIsLoading(false))
    }else{
      mFetch()
        .then(resultado => {
          setProductos(resultado.filter(producto => producto.categoria === categoria))
        })
        
        .catch(error => console.log(error))
        //punto *
        .finally(() => setIsLoading(false))
    }
  }, [categoria])

  // const objJs = [{},{}]
  //   const getFetch = async () => {
  //     const resp = await fetch('https://pokeapi.co/api/v2/ability/?limit=20&offset=20')
  //     const respParser=await resp.json()
  //     setPokemon(respParser.results)
      
  //   }
  //   useEffect (()=>{
  //     getFetch()
  // })
  // console.log(productos)
  //map devuelve: otro array transformado mediante una funcion transformadora
  //[1,2,3,4,5,6,7] <- map <-[<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>]
  return (
  //   div con flexDirection reemplazar abajo
    <div style={{
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap"
  }}>
    
      
        {/* {children} */}
        {isLoading ?
          //valida cuando esta trayendo los datos 
          <h2>Cargando...</h2>
          :
          //cuando va a finally en punto * y cambia a false
          // en item ahora abajo:
         <ItemList productos={productos}/>
          // productos.map(({id, foto,name, precio, categoria}) => <div key={id} className="card w-25">
          //                                    <img src={foto} className="card-img-top " alt="image-card" />
          //                                    <div className="card-body">
          //                                       <h6>Nombre: {name}</h6>
          //                                       <label>Precio: {precio}</label>
          //                                       <label>Categoria: {categoria}</label>
          //                                     </div>  
          //                                       <div className="card-footer">
          //                                           <Link to={`/detail/${id}`}>
          //                                           <button className="btn btn-outline-dark">Detalle</button>
          //                                           </Link>
          //                                       </div>
                                             
          //                               </div>)

        }

      
    </div>
  )
}

export default ItemListContainer