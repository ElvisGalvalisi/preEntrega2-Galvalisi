import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

export const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito, quitarProducto } = useContext(CartContext);

  return (
    <div className='carrito-container'>
      {
        carrito.length > 0 ?
          <>
            <table>

              <thead>
                <tr className='encabezado-carrito'>
                  <th className='th-td'>ID</th>
                  <th className='th-td'>FOTO</th>
                  <th className='th-td'>NOMBRE</th>
                  <th className='th-td'>CANTIDAD</th>
                  <th className='th-td'>PRECIO</th>
                  <th className='th-td'></th>
                </tr>
              </thead>

              <tbody>
                {carrito.map((ph) => (
                  <tr key={ph.id} >
                    <td className='th-td'>{ph.id}</td>
                    <td className='th-td'><img className='item-foto-carrito' src={ph.imagen} alt="" /></td>
                    <td className='th-td'>{ph.nombre}</td>
                    <td className='th-td'> {ph.cant} </td>
                    <td className='th-td'>$ { ph.precio * ph.cant}</td>
                    <td className='th-td'>
                      <button onClick={() => { quitarProducto(ph) }} className='btn-borrar'>❌</button>
                    </td>
                  </tr>))}
              </tbody>

              <tfoot>
                <tr>
                  <td className='total-carrito'>Total:............ ${calcularTotal() }</td>
                </tr>
                
              </tfoot>
            </table>
            <button className='btn-Vaciar' onClick={vaciarCarrito}> VACIAR </button>
            <Link to='/finalizar-compra' className='btn-Finalizar' >FINALIZAR ORDEN</Link>

            
          </> : <h2 className='notFound'> Carrito vacío  </h2>
      }


    </div>
  )
}
