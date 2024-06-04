import React from 'react'

//recibe los datos de la fotografía por PROP
export const ItemDetail = ({photo}) => {
  return (
    <div className='card-foto-ampliada' >

      <img className='item-foto-ampliada' src={photo.imagen} />
      <h6>{photo.nombre}</h6>
      <p>${photo.precio}</p>

    </div>
  )
}
