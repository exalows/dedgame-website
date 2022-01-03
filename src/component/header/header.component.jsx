import React from "react";
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = () =>{
    return(
        <div className="header">
        <Link className="logo-container" to='/' >
        <Logo className="logo"></Logo>
        </Link>
        <options>
            <Link className="option" to="/shop" >SHOP</Link>
            <Link className="option" to="/contact" >CONTACT</Link>
        </options>
    </div>
    )
}

export default Header;