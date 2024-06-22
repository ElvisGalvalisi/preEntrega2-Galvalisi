import { createContext, useState } from "react";

//se inicializa el contexto de Carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    
   /* const [contador, setContador] = useState(1)


    const handleSumar = () => {
        setContador(contador + 1);
    }

    const handleRestar = () => {
        contador > 1 && setContador(contador - 1);
    }*/

    const agregarAlCarrito = (ph) => {

        setCarrito([...carrito, ph] )
        
        /*const itemAgregado = { ...photo };

        const carritoNuevo = [...carrito];
        const agregadoAlCarrito = carritoNuevo.find((ph) => ph.id === itemAgregado.id);


        /*if (agregadoAlCarrito) {
            agregadoAlCarrito += 1;
        } else {
            carritoNuevo.push(itemAgregado);
        }*/


        /*setCarrito(carritoNuevo);*/
        
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

    return (
        <CartContext.Provider value={{ carrito, calcularCantidad, calcularTotal, vaciarCarrito, agregarAlCarrito }}>

            {children}

        </CartContext.Provider>
    )
}