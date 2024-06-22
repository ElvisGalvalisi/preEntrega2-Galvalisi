import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

export const CartWidget = () => {

  const { calcularCantidad } = useContext(CartContext)

  return (
    <div className="carrito">
      <Link className="carrrito-widget" to='/carrito'>
        🛒
      </Link>
      <p className="contador-widget">{calcularCantidad()}</p>
      </div>
  )
}
