import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { ItemContador } from './ItemContador';

//recibe los datos de la fotografía por PROP
export const ItemDetail = ({ photo }) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);


  const [contador, setContador] = useState(1);

  const handleSumar = () => {
      setContador(contador + 1);
  }

  const handleRestar = () => {
      contador > 1 && setContador(contador - 1);
  }

  return (
    <div className='card-foto-ampliada' >

      <img className='item-foto-ampliada' src={photo.imagen} />
      <h6>{photo.nombre}</h6>
      <p>${photo.precio}</p>
      
      <ItemContador cant={contador} sumar={handleSumar} restar={handleRestar} agregar={ () => agregarAlCarrito(photo, contador) } />


    </div>
  )
}
