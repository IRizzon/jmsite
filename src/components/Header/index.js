import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

import './header.css';
import logo from '../../assets/image/logo.svg';

function Header(){

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const location = useLocation();
    const isTransparent = location.pathname === '/' || location.pathname === '/sobrenos'

    return(
        <header className={isTransparent ? 'navbar transparent' : 'navbar'}>
            <Link className={isTransparent ? 'logo transparent' : 'logo'} to="/"><img id='logojm' src={logo}/></Link>
            <nav className={`${'headerNav'} ${ menuOpen ? 'showMenu' : '' }`}>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/sobrenos">Sobre Nós</Link>
                <Link className='link' to="/contato">Fale Conosco</Link> 
            </nav>
            <div 
                className={`${'menuBt'}  ${ menuOpen ? 'open' : '' }`}
                onClick={toggleMenu}
            >
                <span className='line line1'></span>
                <span className='line line2'></span>
            </div>
        </header>
    )
}

export default Header;