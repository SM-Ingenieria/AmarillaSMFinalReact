
import React from 'react'
import { ItemDetail } from '../ItemDetail/itemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

        const {pid} = useParams ()
        console.log(typeof pid)
        return (
            <div className="border border-5 border-primary m-3">
                
                <center>id del producto: {pid}</center>
                <ItemDetail/>
                
            </div>
        )
    }
