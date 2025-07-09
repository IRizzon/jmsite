import { Link, useLocation } from 'react-router-dom';

import './header.css';
import logo from '../../assets/image/logo.svg';

function Header(){
    const location = useLocation();
    const isTransparent = location.pathname === '/' || location.pathname === '/sobrenos'

    return(
        <header className={isTransparent ? 'navbar transparent' : 'navbar'}>
            <Link className={isTransparent ? 'logo transparent' : 'logo'} to="/"><img id='logojm' src={logo}/></Link>
            <div className='headerNav'>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/sobrenos">Sobre Nós</Link> 
                <Link className='link' to="/servico">Serviços</Link>
                <Link className='link' to="/contato">Fale Conosco</Link> 
            </div>
        </header>
    )
}

export default Header;