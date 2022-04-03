import * as React from 'react'
import ItemListContainer from './Components/ItemListContainer';
import NavBar from "./Components/NavBar";


export default function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer message={'ACÁ VA NUESTRO CATÁLOGO'}/>
    </>
  );
}

