import { useState } from "react"
//funcion que maneja estados con usecounter
export const useCounter = (intial=0,min,max) => { //un custom creado por nosotros 
    
    const [counter, setCounter] = useState(1)//se inicia en 1 porque el cliente compraria 1 producto
    
    let handleSumar = () => {
          if (counter<max) {//valide si no supera stock
            setCounter(counter+1)
            
        }
    }
    let handleRestar = () => {
        if (counter>min) {//al validar que ya estaria comprando al menos 1 entonces debe ser mayor a 1
            setCounter(counter-1)
           
        }
    }
    return {counter, handleSumar, handleRestar}
}