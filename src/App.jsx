
import {Menu} from './components/NavBar/NavBar.jsx'

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';



function App() {  


  return (
    <div>
        
         <Menu/>
         <ItemListContainer greeting={"Menu"}/>
         
    </div>
  )
}

export default App
 