import productos from '../Utils/Productos'


export const MostrarDetalle = (id) => {
    return new Promise((resolve, reject) => {
        const productoElegido = productos.find(
           (producto) => producto.id === Number(id)
       );
       setTimeout(() => {
           resolve(productoElegido);
        }, 1000);
    });
};