import React, { useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'

export const ItemContador = () => {

    const { agregarAlCarrito, handleRestar, handleSumar, contador} = useContext(CartContext);




    return (
        <div className='item-contador'>
            <button onClick={handleRestar} className='btn-suma-resta'>➖</button>
               <p className='btn-suma-resta'>{contador}</p> 
            <button onClick={handleSumar} className='btn-suma-resta'>➕</button>

            <button onClick={ agregarAlCarrito } className='btn-Agregar'>Agregar al Carrito</button>
        </div>
    )
}
