// import React, { useState } from 'react'
// import Form from './Form'
// import { formWithValidation } from './formWithValidation'


// // const FormWithValidation = form mejorado <= FormWithValidation (Form)
// const FormWithValidation = formWithValidation(Form)

// export function Formulario() {
//     //inicializado el componente en 0 o en nada 
//     const [formData, setFormData]=useState({
//         name:'',
//         email:''
//     })
    

//     const handleOnChange = (evt) => {//nos hace persistente datos del formulario
        
//         console.log('name: ', evt.target.name)
//         console.log('value: ', evt.target.value)

//         setFormData({
//             ...formData,
//             [evt.target.name]:evt.target.value
//         })
//     }
//     return (
//     <FormWithValidation 
//         formData={formData} 
//         handleOnChange = {handleOnChange}/>
//         )
// }
