import * as React from 'react'
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import ItemListContainer from './Components/Items/ItemListContainer';
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'



export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element= {<ItemListContainer/>}/>
      <Route path='/category/:category' element= {<ItemListContainer/>}/>
      <Route path='/item/:id' element= {<ItemDetailContainer/>}/>    
    </Routes>
    </BrowserRouter>
  );
}

