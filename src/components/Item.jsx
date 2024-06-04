import React from 'react'
import { Link } from 'react-router-dom'



export const Item = ({foto}) => {
  return (
    <div className='card-foto' >

      <img className='item-foto' src={foto.imagen} />
      <h6>{foto.nombre}</h6>
      <p>${foto.precio}</p>
      <Link className='item-foto-ampliar' to={`/item/${foto.id}`}>Ampliar</Link>

    </div>
  )
}
