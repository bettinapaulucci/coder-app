import * as React from 'react'
import ItemDetailContainer from './Components/Items/ItemDetailContainer';
import ItemListContainer from './Components/Items/ItemListContainer';
import NavBar from "./Components/NavBar/NavBar";



export default function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  );
}

