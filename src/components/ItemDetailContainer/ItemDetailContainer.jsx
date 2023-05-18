
import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/itemDetail'
import { useParams } from 'react-router-dom'
import { mFetch } from '../utils/mFetch'

export const ItemDetailContainer = () => {
    const[isLoading,setIsLoading]=useState(true)    
    const [producto,setProducto] = useState ({})
        const {pid} = useParams ()
        
        useEffect(()=> {
            mFetch(pid)
            .then(resp=>setProducto(resp))
            .catch(err=>console.log(err)) 
            .finally(()=>setIsLoading(false))       
        },[])

        // console.log(typeof pid)
        return (
            <div className="border border-5 border-primary m-3">
                {isLoading?
                <h2>Cargando</h2>    
            :
                <>
                <center>id del producto: {pid}</center>
                <ItemDetail producto={producto}/>
                </>
            }
                
            </div>
        )
    }
