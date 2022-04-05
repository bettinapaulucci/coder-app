import * as React from 'react'
import ItemListContainer from './Components/Items/ItemListContainer';
import NavBar from "./Components/NavBar/NavBar";


export default function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer message={'ACÁ VA NUESTRO CATÁLOGO'}/>
    </>
  );
}

