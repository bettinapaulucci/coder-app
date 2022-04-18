import productos from "./Productos";

const MostrarProductos = (category) => {
    return new Promise ((resolve, reject) => {
        const filtroProductos = productos.filter ((producto) => producto.category === category 
        );
        setTimeout (() => {
            if (category) {
                resolve (filtroProductos);
            } else
                resolve (productos);
        },2000);
    });
};

export default MostrarProductos;