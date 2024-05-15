import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <>
            <nav className="nav-bar">
                <ul className="menu-nav">
                    <li className="lista-nav"><a href="#"></a>INICIO</li>
                    <li className="lista-nav"><a href="#"></a>SOBRE MI</li>
                    <li className="lista-nav"><a href="#"></a>EVENTOS</li>
                    <li className="lista-nav"><a href="#"></a>CONTACTO</li>
                </ul>
            </nav>
            <CartWidget />

        </>
    )
}
