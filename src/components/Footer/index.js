import { Link } from 'react-router-dom';

import './footer.css';
import logofantasia from '../../assets/image/logofantasia.svg';

import { FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';


function Footer(){
    return(
        <footer>
            <div className='addcontainer'>
                <FaMapMarkerAlt className='icon'/>
                <div className='address'>
                    <h3>Rua Vicente Valadares, 237</h3>
                    <h3>Distrito Industrial - 38551-022</h3>
                    <h2>Coromandel - MG</h2>
                </div>
            </div>
            <Link className='logo' to="/"><img id='logofjm' src={logofantasia}/></Link>
            <div className='social'>
                <div>
                    <FaWhatsapp className='icon'/>
                    <h2>(34) 9 9925-7079</h2>
                </div>
                <div>
                    <FaWhatsapp className='icon'/>
                    <h2>(34) 9 8807-4756</h2>
                </div>
                <div>
                    <FaInstagram className='icon'/>
                    <h2>@jm.precisao</h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer;