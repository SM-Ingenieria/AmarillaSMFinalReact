import { useEffect, useState } from "react";
import { mFetch } from "../utils/mFetch";
import { Link, useParams } from "react-router-dom";
import {collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where} from 'firebase/firestore'

import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";



const ItemListContainer = ({ greeting, children }) => {
  
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [producto, setProducto] = useState({})
  const [meGusta,setMeGusta] = useState(true)
  const {categoria} = useParams()
  console.log(categoria) 
  
  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection (dbFirestore, 'productos')
    if (!categoria) {
      //trae todos 
  
          getDocs(queryCollection)
            .then(res => setProductos( res.docs.map(producto=>({id: producto.id, ...producto.data() }) ) ))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
      
     
    }else{
      const queryCollectionFiltered = query(
        queryCollection, 
        where('categoria','==', categoria),
        // limit(3)
        // orderBy('precio','desc')
        )
      getDocs(queryCollectionFiltered)
        .then(res => setProductos( res.docs.map(producto=>({id: producto.id, ...producto.data() }) ) ))
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))

    }
  }, [categoria])

  // utilizando un moc local
  // useEffect(() => {
  //   if (!categoria) {
      
  //     mFetch()
  //       .then(resultado => {
  //         setProductos(resultado)
  //       })
        
  //       .catch(error => console.log(error))
  //       //punto *
  //       .finally(() => setIsLoading(false))
  //   }else{
  //     mFetch()
  //       .then(resultado => {
  //         setProductos(resultado.filter(producto => producto.categoria === categoria))
  //       })
        
  //       .catch(error => console.log(error))
  //       //punto *
  //       .finally(() => setIsLoading(false))
  //   }
  // }, [categoria])


//-------------------------------------------------------------------------------------------------
  // vamos a traer un producto (documento) -> y este ira a ItemDetailContainer - id =>(pid)

      // useEffect(()=>{
      //       const dbFirestore = getFirestore()
      //       const queryDoc = doc(dbFirestore, 'productos', 'DHqnIBCLR2HSO89S54iq')

      //       getDoc(queryDoc)
      //         .then(resp => setProducto({id: resp.id, ...resp.data()}))
      //         .catch(err => console.log(err))
              
      // },[])
 //---------------------------------------------------------------------------------------------------------------

// Traemos todos los documentos
    // useEffect (()=> {
    //     const dbFirestore = getFirestore()
    //     const queryCollection = collection (dbFirestore, 'productos')

    //     getDocs(queryCollection)
    //       .then(res => setProductos( res.docs.map(producto=>({id: producto.id, ...producto.data() }) ) ))
    //       .catch(error => console.log(error))
    //       .finally(() => setIsLoading(false))


    // },[])
//---------------------------------------------------------------------------------------------------------------
// Traert todos los productos filtrados
  //   useEffect (()=> {
  //     const dbFirestore = getFirestore()
  //     const queryCollection = collection (dbFirestore, 'productos')

  //     const queryCollectionFiltered = query(
  //       queryCollection, 
  //       where('precio','>', 50),
  //       // limit(3)
  //       orderBy('precio','desc')
  //       )
  //     getDocs(queryCollectionFiltered)
  //       .then(res => setProductos( res.docs.map(producto=>({id: producto.id, ...producto.data() }) ) ))
  //       .catch(error => console.log(error))
  //       .finally(() => setIsLoading(false))


  // },[])

//---------------------------------------------------------------------------------------------------------------



  const handleProductsFiltered = ({

  })

  const handleMeGusta= () =>{

      setMeGusta(!meGusta)
  }

  const handleAgregarProducto = () => {
    setProductos([
      ...productos,
      {id: productos.length+1 , name: 'Nuevo Producto', categoria: '', precio: 3500, stock: 100 }
     ])
  }

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
  // console.log('item list container')
  console.log(productos)
  return (
  //   div con flexDirection reemplazar abajo
    <div style={{
      display:"flex",
      flexDirection:"row",
      flexWrap:"wrap"
  }}>
    
        <button className="btn btn-success rounded-pill" onClick={handleMeGusta}>Me gusta</button>
        <button className="btn btn-success "onClick={handleAgregarProducto}>Agregar Producto</button>
        {/* {children} */}
        {isLoading ?
          //valida cuando esta trayendo los datos 
          <Loading/>
          // <h2>Cargando...</h2>
          :
          //cuando va a finally en punto * y cambia a false
          // en item ahora abajo:
         <ItemList productos={productos}/>
          

        }

      
    </div>
  )
}

export default ItemListContainer