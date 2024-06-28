import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'


export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='container'>
                    <p><Link to={'/contacto'} className='navLink'>CONTACTO</Link></p>
                    <p><Link to="/sobre-mi" activeclassname="active" className="navLink" >SOBRE MI</Link></p>

                    <ul className="redes">
                        <li className="lista-redes">
                            <a href="https://www.instagram.com/elvisgalvalisi">
                                <img className='img-redes' src={instagram} alt="Instagram.png" />
                            </a>
                            <a href="https://www.facebook.com/elvis.galvalisi">
                                <img className='img-redes' src={facebook} alt="facebook.png" />
                            </a>
                        </li>
                    </ul>
                </div>

                <p className="texto-footer"> © Todos los derechos reservados </p>
                <p className="texto-footer">Elvis Galvalisi</p>



            </div>
        </>

    )
}
