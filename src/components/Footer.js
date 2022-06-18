import React from "react";
import { Link } from "react-router-dom";

const Footer = ()=>{
    return(
        <React.Fragment>
            <div className="footer">
                <div className="footer-main">
                    <div className="footer-section-links">
                        <h4>Menu</h4>
                        <ul className="links-footer">
                            <li><Link to="/help" className="footer-link">Ayuda</Link></li>
                            <li><Link to="/about" className="footer-link">Sobre nosotros</Link></li>
                            <li><Link to="/warranty" className="footer-link">Acuerdos de garantía</Link></li>
                            <li><Link to="/faq" className="footer-link">Preguntas frecuentes</Link></li>
                            <li><Link to="/contacto" className="footer-link">Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section-media">
                        <h4>Seguinos en redes</h4>
                        <div className="networks">
                            <div className="media-icon">
                            </div>
                            <div className="media-icon">
                            </div>
                            <div className="media-icon">
                            </div>
                            <div className="media-icon">
                            </div>
                        </div>
                    </div>
                    <div className="footer-section-links">
                        <h4>Menu</h4>
                        <ul className="links-footer">
                            <li><Link to="/categories/1" className="footer-link">Placas de video</Link></li>
                            <li><Link to="/categories/2" className="footer-link">Motherboards</Link></li>
                            <li><Link to="/categories/3" className="footer-link">Microprocesadores</Link></li>
                            <li><Link to="/categories/4" className="footer-link">Memorias RAM</Link></li>
                            <li><Link to="/categories/5" className="footer-link">Fuentes de alimentación</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2022 - Gaming Zone - Todos los derechos reservados</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;