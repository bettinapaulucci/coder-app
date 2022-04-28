import Producto from '../Utils/Producto'


export const MostrarDetalle = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
                resolve (Producto);
            }, 300);
    });
    };

    //export const MostrarDetalle = (id) => {
        //return new Promise((resolve, reject) => {
            //const productoElegido = productos.find(
               // (producto) => producto.id === Number(id)
           // );
           // setTimeout(() => {
               // resolve(productoElegido);
            //}, 1000);
        //});
  //  };