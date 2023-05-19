
import { NavBar } from './components/NavBar/NavBar.jsx'
import { Button } from 'reactstrap';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartContainer } from './components/CartContainer/CartContainer.jsx';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; //le cambio el nombre con as
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { CartContextProvider } from './Context/CarContext.jsx';
// import { CartContextProvider } from './Context/CarContext.jsx';


// import { Formulario } from './components/Formulario/Formulario.jsx';
// import {Titulo} from './components/Titulo/Titulo.jsx'
// import { Menu2 } from './components/Menu/Menu.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';





// import Box from './components/Box/Box.jsx';

//  const Container = ()=>{
//   return(
//     <Box titulo ='este es el titulo'>
//           <p>contenido personalizado</p>
//           <button>boton</button>
//     </Box>
//   )
//  }
function App() {

  return (
    <CartContextProvider>

      <div

        className="border border-5 border-primary m-3"

      >

        <Router>
          <NavBar />
          <Routes>
            {/* me asocia una ruta con un elementos route */}
            <Route
              path='/'
              element={<ItemListContainer />}
            />
            {/* //para luego configurar por categoria */}
            <Route
              path='/categoria/:categoria'
              element={<ItemListContainer />}
            />

            <Route
              path='/detail/:pid'
              element={<ItemDetailContainer />}
            />

            <Route
              path='/cart'
              element={<CartContainer />}
            />
            {/* tendria que crear un componente que direccion a 404 no encontrado */}
            {/* <Route path='/notfound' element={<NotFound404 />} /> */}
            {/* todas las rutas que no esten antes caen en el comodin y redirecciona a la raiz */}
            <Route
              path='*'
              element={<Navigate to='/' />}
            />
          </Routes>
          {/* <ItemCount /> */}

          {/* <Formulario/> */}
          {/* <button onClick={handleBooleano}>Me gusta</button> */}
          {/* puedo pasar string sin usar llaves como en el ejemplo de abajo*/}
          {/* <Titulo titulo='APP' subTitulo='APP'/>  */}

          {/* solo ejemplo */}
          {/* para mostrar en pantalla abro llaves { } para escapar del jsx */}
          {/* //un evento me produce un nuevo render que es un nuevo llamado a la app, es decir una nueva ejecucion en este caso de app */}
          {/* <div ref={divRef}>contenido actual</div>
          <button onClick={handleClick}>Cambiar el contenido</button>
          <hr/> */}
          {/* <Container/> */}
          {/* <Footer></Footer>     */}

        </Router>
      </div>
    </CartContextProvider>
  )
}

export default App
