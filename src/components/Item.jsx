import React from 'react'



export const Item = ({foto}) => {
  return (
    <div  >

      <img className='item-foto' src={foto.imagen} />
      <h6>{foto.nombre}</h6>
      <p>${foto.precio}</p>

    </div>
  )
}
