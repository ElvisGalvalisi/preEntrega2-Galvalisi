
export const ItemContador = ({cant, sumar, restar, agregar}) => {


    return (
        <div className='item-contador'>
            <button onClick={restar} className='btn-suma-resta'>➖</button>
            <p className='btn-suma-resta'>{cant}</p>
            <button onClick={sumar} className='btn-suma-resta'>➕</button>
            <button onClick={agregar} className='btn-Agregar'>Agregar al Carrito</button>
        </div>
    )
}
