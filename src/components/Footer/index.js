import { Link } from 'react-router-dom';

import './footer.css';
import logofantasia from '../../assets/image/logofantasia.svg';

import { FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';


function Footer(){
    return(
        <footer>
            <div className='addcontainer'>
                <FaMapMarkerAlt className='icon'/>
                <Link 
                    className='address'
                    to='https://maps.app.goo.gl/ebPrDuuirxTZRKyR6'
                    target='_blank'
                >
                    <h3>Rua Vicente Valadares, 237</h3>
                    <h3>Distrito Industrial - 38551-022</h3>
                    <h2>Coromandel - MG</h2>
                </Link>
            </div>
            <Link className='logo' to="/"><img id='logofjm' src={logofantasia} alt='Logo JMPrecisão'/></Link>
            <div className='social'>
                <Link 
                    to='https://wa.me/5534999257079' 
                    target='_blank'
                    className='social_Link'
                >
                    <FaWhatsapp className='icon' />
                    <h2>(34) 9 9925-7079</h2>
                </Link>
                <Link 
                    to='https://wa.me/5534988074756' 
                    target='_blank'
                    className='social_Link'
                >
                    <FaWhatsapp className='icon' />
                    <h2>(34) 9 8807-4756</h2>
                </Link>
                <Link 
                    to='https://www.instagram.com/jm.precisao/' 
                    target='_blank'
                    className='social_Link'
                >
                    <FaInstagram  className='icon' />
                    <h2>@jm.precisao</h2>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;