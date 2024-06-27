import { createContext, useState } from "react";

//se inicializa el contexto de Carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);


    const agregarAlCarrito = (photo, cant) => {

        const phAgregada = { ...photo, cant };
        
        const carritoNuevo = [...carrito];
        
        const agregadoAlCarrito = carritoNuevo.find( (ph) => ph.id == phAgregada.id);
        

        if (agregadoAlCarrito) {
            agregadoAlCarrito.cant += cant;
        } else {
            carritoNuevo.push(phAgregada);
        }

        
        setCarrito(carritoNuevo);

    }





    const calcularCantidad = () => {
        return carrito.length;
    }

    const calcularTotal = () => {
        return carrito.reduce((cont, ph) => cont + ph.precio, 0)
    }

    const vaciarCarrito = () => {
        return setCarrito([])
    }

    const quitarProducto = (photo) => {
        const phEncontrado = carrito.find(ph => ph.id === photo.id)
        const index = carrito.indexOf(phEncontrado);

        const carritoActualizado = [...carrito];
        carritoActualizado.splice(index, 1);
        setCarrito(carritoActualizado);

    }

    return (
        <CartContext.Provider value={{ carrito, calcularCantidad, calcularTotal, vaciarCarrito, agregarAlCarrito, quitarProducto }}>

            {children}

        </CartContext.Provider>
    )
}