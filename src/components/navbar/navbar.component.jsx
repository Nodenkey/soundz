import React from "react";
import Logo from "../../assets/images/soundz_logo.png";
import './navbar.styles.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
            <a className="navbar-brand" href="#"><img src={Logo} alt="sounds logo" className='logo'/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <div className='nav-section sect-80'>
                        <li className="nav-item">
                            <a className="nav-link nav-active" href="#">HOME <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ALBUMS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">GALLERY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ARTISTS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SHOP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                    </div>

                    <div className='nav-section sect-20'>
                        <li className="nav-item">
                            <a className="nav-link fab fa-facebook-f" href="#"/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fab fa-twitter" href="#"/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fab fa-instagram" href="#"/>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fas fa-cart-plus" href="#"/>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;

