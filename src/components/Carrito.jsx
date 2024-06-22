import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

export const Carrito = () => {

  const { carrito, calcularTotal, vaciarCarrito,} = useContext(CartContext);
  
  const [contador, setContador] = useState(1)

  const handleSumar = () => {
    setContador(contador + 1);
}

const handleRestar = () => {
    contador > 1 && setContador(contador - 1);
}

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
                  <th className='th-td'>CANTIDAD</th>
                  <th className='th-td'>PRECIO</th>
                  <th className='th-td'></th>
                </tr>
              </thead>

              <tbody>
                {carrito.map((ph) => (
                  <tr key={ph.id} >
                    <td className='th-td'>{ph.id}</td>
                    <td ><img className='item-foto-carrito' src={ph.imagen} alt="" /></td>
                    <td>
                      <div className='item-contador'>
                        <button onClick={()=>handleRestar()} className='btn-suma-resta'>➖</button>
                        <p className='btn-suma-resta'>{contador}</p>
                        <button onClick={()=>handleSumar()} className='btn-suma-resta'>➕</button>
                      </div>
                    </td>
                    <td className='th-td'>$ {ph.precio}</td>
                    <td className='th-td'>
                      <button className='btn-borrar'>❌</button>
                    </td>
                  </tr>))}
              </tbody>

              <tfoot>
                <h3>Total: ${calcularTotal()}</h3>
              </tfoot>
            </table>
            <button className='btn-Vaciar' onClick={vaciarCarrito}> VACIAR </button>
          </> : <h2 className='notFound'> Carrito vacío  </h2>
      }


    </div>
  )
}
