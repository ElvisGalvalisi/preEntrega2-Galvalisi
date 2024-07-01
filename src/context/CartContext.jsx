import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';

//se inicializa el contexto de Carrito
export const CartContext = createContext();

//estado inicial del carrito
const inicioCarrito = JSON.parse(localStorage.getItem('carrito')) || []; 

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState(inicioCarrito);


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

        Swal.fire({
            text: "¡Foto agregada al carrito!",
            icon: "success",
            timer:1000,
            showConfirmButton: false,
            iconColor: 'green',
            background: 'black'
          });

    }




    const calcularCantidad = () => {
        return carrito.length;
    }


    const calcularTotal = () => {
        return  carrito.reduce((cont, ph) => cont + (ph.precio * ph.cant), 0)
    }

    const vaciarCarrito = () => {
        Swal.fire({
            text: "¡Carrito vacío!",
            icon: "info",
            iconColor: 'red',
            timer:1000,
            showConfirmButton: false,
            background: 'black'
          });
        return setCarrito([])
    }

    const quitarProducto = (photo) => {
        const phEncontrado = carrito.find(ph => ph.id === photo.id)
        const index = carrito.indexOf(phEncontrado);

        const carritoActualizado = [...carrito];
        carritoActualizado.splice(index, 1);
        setCarrito(carritoActualizado);
        Swal.fire({
            text: "¡Foto quitada del carrito!",
            icon: "error",
            iconColor: 'red',
            timer:1000,
            showConfirmButton: false,
            background: 'black'
          });
    }

    //manejo de estado del localStorage
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);
    

    return (
        <CartContext.Provider value={{ carrito, calcularCantidad, calcularTotal, vaciarCarrito, agregarAlCarrito, quitarProducto }}>

            {children}

        </CartContext.Provider>
    )
}