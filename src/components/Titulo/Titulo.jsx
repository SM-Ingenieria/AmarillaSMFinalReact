export const Titulo = (props) => {
    console.log(props)
    return (
      <div>
            <h1 className='App'> esto es un titulo de {props.titulo} </h1>
            <h2 className='App'> esto es un subtitulo de {props.subTitulo} </h2>
      </div>
  
    )
  
  
  }

//   OPCION 2 DEFINIENDO PROPS directamente, como es un objeto props entonces

// export const Titulo = (props) => {
//     const {titulo , subTitulo} = props
//     return (
//       <div>
//             <h1 className='App'> esto es un titulo de {titulo} </h1>
//             <h2 className='App'> esto es un subtitulo de {subTitulo} </h2>
//       </div>
  
//     )
  
  
//   }

//   OPCION 3 DEFINIENDO los parametros en la entrada haciendo destructuri

// export const Titulo = ({titulo, subTitulo}) => {
    
//     return (
//       <div>
//             <h1 className='App'> esto es un titulo de {titulo} </h1>
//             <h2 className='App'> esto es un subtitulo de {subTitulo} </h2>
//       </div>
  
//     )
  
  
//   }