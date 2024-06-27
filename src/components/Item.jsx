
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import { ItemContador } from './ItemContador'


export const Item = ({ foto }) => {

  const { agregarAlCarrito } = useContext(CartContext);

  const cantidad = 1;

  return (
    <div className='card-foto' >

      <img className='item-foto' src={foto.imagen} />
      <p className='titulo-item-foto'>{foto.nombre} -  ${foto.precio}</p> 
      <div>
        <Link className='item-foto-ampliar' to={`/item/${foto.id}`}>
          Ampliar 👁‍🗨
        </Link>

       <button onClick={ ()=> agregarAlCarrito(foto, cantidad) } className='btn-Agregar'>Agregar al Carrito</button>

      </div>
      
      

    </div>
  )
}
