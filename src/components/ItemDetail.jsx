import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { ItemContador } from './ItemContador';

//recibe los datos de la fotografía por PROP
export const ItemDetail = ({ photo }) => {


  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className='card-foto-ampliada' >

      <img className='item-foto-ampliada' src={photo.imagen} />
      <h6>{photo.nombre}</h6>
      <p>${photo.precio}</p>
      <button onClick={ ()=> agregarAlCarrito(photo) } className='btn-Agregar'>Agregar al Carrito</button>
      

    </div>
  )
}
