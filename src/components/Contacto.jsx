import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from '../firebase/config';
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


export const Contacto = () => {

     //se importan las funciones necesarias para manejar el fomrulario.
     const { register, handleSubmit } = useForm();

     const [docID, setDocID] = useState("")

    const saveContacto = (datosForm) => {
        const datosContacto = {
            datos: datosForm     
        }

        const contactoRef = collection(dataBase, 'contacto')

        addDoc(contactoRef, datosContacto)
        .then((doc) => setDocID(doc.id))

        Swal.fire({
            text: "¡Consulta enviada correctamente!",
            icon: "success",
            timer: 1000,
            showConfirmButton: false,
            iconColor: 'green',
            background: 'black'
        });
        
    }

    if (docID) {
        return (
            <div className="orden-compra">
                <h2>¡Consulta enviada!</h2>

                <p>En breve recibirá una respuesta en la casilla de correo proporcionada en el formulario.</p>
                
                <p>Código: {docID}</p>
                <button className="btn-Agregar">
                    <Link to='/' className="navLink" >Ir al Inicio</Link>
                </button>
                                

            </div>
        )
    }



  return (
    <div className="container">
            <form className="container-form" onSubmit={handleSubmit(saveContacto)}>
                <label >Ingrese Apellido y Nombre</label><br />
                <input className="item-form" type="text" placeholder="Apellido y Nombre" required {...register('nombreCompleto')} /><br />
                <label >Ingrese su E-mail</label><br />
                <input className="item-form" type="e-mail" placeholder="su-email@mail.com" required {...register('e-mail')} /><br />
                <label >Consulta: </label><br />
                <input className="item-form" type="text" placeholder="Ingrese su consulta" required {...register('consulta')} /><br />
                <button className="btn-Agregar" type="submit">ENVIAR</button>
                

            </form>
        </div>
  )
}
