import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, query, getDocs, limit, orderBy, doc } from "firebase/firestore";
import { dataBase } from '../firebase/config';
import { Link } from "react-router-dom";
import { QueryCompositeFilterConstraint } from "firebase/firestore/lite";

export const CheckOut = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

    //se importan las funciones necesarias para manejar el fomrulario.
    const { register, handleSubmit } = useForm();
    const [ultimoNumero, setUltimoNumero] = useState(null);
    const [docId, setDocId] = useState("")

    //obtener último nro de orden
    const getLastNumero = async () => {
        try {
            const q = query(collection(dataBase, "ordenes"), orderBy("numero", "desc"), limit(1));
            const querySnapshot = await getDocs(q);
            let lastNumero = null;

            querySnapshot.forEach((doc) => {
                lastNumero = doc.data().numero;
            });

            return lastNumero;
        } catch (error) {
            console.error("Error obteniendo el último numero: ", error);
            return null;
        }
    };



    useEffect(() => {
        const fetchData = async () => {
            const numero = await getLastNumero();
            setUltimoNumero(numero + 1);
        };

        fetchData();
    }, []);


    const generarOrden = (datosForm) => {
        const orden = {
            numero: ultimoNumero,
            cliente: datosForm,
            fotos: carrito,
            total: calcularTotal()
        }

        const ordenRef = collection(dataBase, 'ordenes')

        addDoc(ordenRef, orden)
            .then((doc) => setDocId(doc.id))

    }

    if (docId) {
        return (
            <div className="orden-compra">
                <h2>Muchas gracias por adquirir las fotografías.</h2>

                <p>La Orden <strong>N" #{ultimoNumero}</strong> está siendo preparada.</p>

                <p>En las próximas 24hs recibirá las fotos en la casilla de correo proporcionada.</p>
                
                <p>Código de Identificación: {docId}</p>
                <button className="btn-Agregar">
                    <Link to='/'  className="navLink" onClick={vaciarCarrito()} >Ir al Inicio</Link>
                </button>

                

            </div>
        )
    }

    return (
        <div className="container">
            <form className="container-form" onSubmit={handleSubmit(generarOrden)}>
                <label >Ingrese Apellido y Nombre</label><br />
                <input className="item-form" type="text" placeholder="Apellido y Nombre" {...register('nombreCompleto')} /><br />
                <label >Ingrese su E-mail</label><br />
                <input className="item-form" type="e-mail" placeholder="su-email@mail.com" {...register('e-mail')} /><br />
                <button className="btn-Agregar" type="submit">CONFIMAR PEDIDO</button>

            </form>
        </div>
    )
}
