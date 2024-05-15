import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'


export const Footer = () => {
    return (
        <>
            <div className="footer">

                <p className="derechos"> © Todos los derechos reservados </p>
                
                <ul className="redes">
                    <li className="lista-redes">
                        <a href="#">
                            <img className='img-redes' src={instagram} alt="Instagram.png" />
                        </a>
                        <a href="#">
                            <img className='img-redes' src={facebook} alt="facebook.png" />
                        </a>
                    </li>
                </ul>
                <p className="nombre">Elvis Galvalisi</p>



            </div>
        </>

    )
}
