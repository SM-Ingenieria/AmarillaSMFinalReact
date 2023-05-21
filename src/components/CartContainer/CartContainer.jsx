import React, { useState } from 'react'
import { useCartContext } from '../../Context/CarContext'
import { addDoc, collection, doc, getFirestore, query, updateDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'

export const CartContainer = (children) => {
  const [dataForm, setDataForm] = useState({
      nombre: '',
      telefono: '',
      email: ''


  })

  const { cartList, vaciarCarrito,precioTotal, eliminarItem } = useCartContext()
  const [id,setId] = useState('')
  const generarOrden =(evt)=> {
    evt.preventDefault()
    const order ={}
    order.comprador=dataForm
    order.items = cartList.map(({name,id,precio,cantidad})=>({id, name,precio,cantidad}))
    order.total = precioTotal()
    // console.log('generando orden')
    // console.log(order)

    //insertar la orden a firebase

    const dbFirestore = getFirestore()
    const orderCollection = collection (dbFirestore, 'orders')

    addDoc(orderCollection, order)
      .then (res => alert(`id de la compra: ${res.id}`))
      .catch(err=>console.log(err))
      .finally(()=>{
        setDataForm({
          nombre: '',
          telefono: '',
          email: ''
        })
        setTimeout()
        vaciarCarrito()
      })

      //para actualizar el firebase algun dato que necesite, primero apuntamos a un documento con doc
      
      // const queryDoc = doc (dbFirestore, 'productos', '01acbNgzLBR2nwfPj5wh')



      //para actualizar la cantidad de stock por ejemplo
      // updateDoc(queryDoc,{
      //   stock: 0
      //   })
      //   .finally(()=>console.log('finalizo la actualizacion'))
      }

   //para cargar muchos productos
  //  arrayProductos.forEach (async element => {
  //       addDoc(collection, producto)
  //  })

      const handleOnChange = (evt) => {
        console.log('nombre del input',evt.target.name)
        console.log('valor del input', evt.target.value)
        setDataForm ({
          ...dataForm,
          [evt.target.name]:evt.target.value
        })
      }     

      console.log(dataForm)
  return (
    <div>
        {/* no puedo usar el triple igual por eso no me funciona el cartel de que no hay productos */}
      {/* { id.length != 0  } */}
      { cartList.lenght !== 0 ?
      <>
      
       {cartList.map(prod => (
        <div key={prod.id}>

          <img className="w-25" src={prod.foto} alt="imagen" />
          <label>Cantidad: {prod.cantidad} -</label>
          <label>Precio: {prod.precio} </label>
          <button onClick={()=>eliminarItem(prod.id)}>  </button>
        </div>
      ))}

      <h3>Precio Total : {precioTotal()}</h3>
      <button onClick={vaciarCarrito} className='btn btn-outline-danger'> Carrito</button>

        <form onSubmit={generarOrden}>
          <input 
            type="text" 
            name='nombre' 
            onChange={handleOnChange}
            value={dataForm.nombre} 
            placeholder='Ingrese el Nombre' 
            />
          <input 
          type="text" 
          name='telefono' 
          onChange={handleOnChange}
          value={dataForm.telefono} 
          placeholder='Telefono' 
          />
          <input 
          type="text" 
          name='email' 
          onChange={handleOnChange}
          value={dataForm.email} 
          placeholder='Ingrese el Nombre' 
          />
        <button onClick={generarOrden} className='btn btn-outline-success'>Generar Orden</button>
        </form>
        </>
        :
        <div>
          <Link to='/'> Comprame algo</Link>
          
        </div>
      }
    </div>
  )
}

