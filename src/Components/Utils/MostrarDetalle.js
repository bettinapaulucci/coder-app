import Producto from '../Utils/Producto'


export const MostrarDetalle = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
                resolve (Producto);
            }, 300);
    });
    };