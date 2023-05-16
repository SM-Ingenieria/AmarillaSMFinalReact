

// import { useState } from "react"

// export const formWithValidation = (WrappedComponent) => {
//     const [errors, setErrors] = useState({})


//     const FormWithValidation = (props) => {
//         const validateForm = () => {

//             let newErrors = {}
//             let isValid = true

//             if (!props.formData.name) {
//                 newErrors.name = 'el campo name es obligatorio'
//                 isValid = false
//             }

//             if (!props.formData.email) {
//                 newErrors.email = 'el campo email es obligatorio'
//                 isValid = false
//             }
//             setErrors(newErrors)
//             return isValid
//         }




//         return <WrappedComponent //form + 
//             {...props}//a lo que ya teniamos se le agregan los errrores
//             errors={errors}
//             validateForm={validateForm}
//                 />
//         //retorno del componente que mejora el componente padre
//     }

//     return FormWithValidation



// }

