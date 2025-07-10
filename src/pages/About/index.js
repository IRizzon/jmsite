import './about.css';

import truckTitle from '../../assets/image/history/truckTitle.jfif';


function About(){
    return(
        <div className='about'>
            <div className='cardTitle'>
                <img src={truckTitle} className='bgTitle'/>
                <div className='bgOverlay'/>
                <div className='aTitle'>
                    <h1>JM Precisão</h1>
                    <h2>De Coromandel para todo o Brasil</h2>
                </div>
            </div>


        </div>
    )
}

export default About;