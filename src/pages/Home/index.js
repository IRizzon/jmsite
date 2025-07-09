import './home.css';

//Library Import
import { Swiper, SwiperSlide} from 'swiper/react';
import { FaCircleArrowRight } from 'react-icons/fa6';

//Image Import
import Night from '../../assets/image/slide/night.svg';
import Even from '../../assets/image/slide/evenight.svg';
import Suply1 from '../../assets/image/slide/suply1.svg'; 
import Suply2 from '../../assets/image/slide/suply2.svg';
import logo from '../../assets/image/logo.svg';
import pulv from '../../assets/image/product/pulv.jpeg';
import dist from '../../assets/image/product/dist.jpeg';
import adubo from '../../assets/image/product/adubo.jpeg';
import truck from '../../assets/image/cards/truck.jpeg';
import fleet1 from '../../assets/image/cards/frotaD.jpeg';
import fleet2 from '../../assets/image/cards/frotaE.jpeg';
import map from '../../assets/image/map.svg';

const slide = [
    {id: '1', image:Suply1}, 
    {id:'2', image:Suply2}, 
    {id:'3', image:Even}, 
    {id:'4', image:Night}
]

function Home(){

    return(
        <main>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                style={{ width: '100%', margin:'0', padding:'0'}}
            >
                {slide.map ( (item) =>(
                    <SwiperSlide 
                        key={item.id}
                        style={{margin:'0', padding:'0'}}
                    >
                        <img
                            src={item.image}
                            alt='slider'
                            className='slide-content'
                        />
                    </SwiperSlide>
                ))}
                <div className='slide-overlay'/>
            </Swiper>

{/*Comercial */}

            <div className='comercial'>
                <div className='comercial-slogan'>
                    <button className='btTalk'>
                        Fale Conosoco
                        <FaCircleArrowRight
                            style={{ color: '#7FBF50', fontSize: '50px'}}
                        />
                    </button>
                    <div className='slogan'>
                        <h1 className='title'>Agilidade</h1>
                        <h2 className='sub'>para entregar,</h2>
                        <div className='slogan-div'>
                            <h1 className='title'>Qualidade</h1>
                            <h2 className='sub'>para produzir.</h2>
                        </div>
                    </div>
                </div>
                <div className='comercial-service'>
                    <h1>Referência</h1>
                    <h2>em Agricultura de Precisão</h2>
                    <button className='btService'>Correção de Solo</button>
                    <button className='btService'>Adubação</button>
                    <button className='btService'>Pulverização</button>
                </div>
            </div>

{/*Service Data */}

            <div className='pData'>
                <div className='pTitle'>
                    <img src={logo} className='logojm'/>
                    <h1>Alta Produtividade</h1>
                </div>
                <div className='circle-container'>
                    <div className='circle'>
                        <img src={dist} className='imgCircle'/>
                        <h1 className='pDesc'>+1.500 Hectares por dia na distribuição de Calcário</h1>
                    </div>
                    <div className='circle'>
                        <img src={adubo} className='imgCircle'/>
                        <h1 className='pDesc'>+10.00 Hectares por dia em Adubação</h1>
                    </div>
                    <div className='circle'>
                        <img src={pulv} className='imgCircle'/>
                        <h1 className='pDesc'>+1.000 Hectares por dia em Pulverização</h1>
                    </div>
                </div>
            </div>

{/*Comercial 2 */}
            
            <div className='comercial2'>
                <div className='cDesc'>
                    <div className='cContainer'>
                        <h2 className='dialog'>Fale já com nosso atendimento e faça seu orçamento!</h2>
                        <button className='dialogBt'>
                            <FaCircleArrowRight
                                style={{ fontSize: '45px', color: '#0B2800'}}
                            />
                        </button>
                    </div>
                    <div className='sellDesc'>
                        <div className='sellContainer'>
                            <h1 className='cSlogan'>Precisão em cada Hectare.</h1>
                            <button className='sellBt'>
                                Comece Agora
                                <FaCircleArrowRight
                                    style={{ fontSize: '60px' }}
                                />
                            </button>
                        </div>
                        <div className='machine'>
                            <h1 className='mName'>Tratores</h1>
                            <h1 className='mName'>Caminhões</h1>
                            <h1 className='mName'>Pulverizadores</h1>
                            </div>
                    </div>
                </div>
                <img src={truck} className='truck'/>
            </div>

{/*Fleet Cards */}

            <section className='cards'>
                <div className='pin'>
                    <img src={logo} className='pinLogo'/>
                </div>
                <div className='cardContainer'>
                    <div className='textCard'>
                        <h2>Uma frota capaz de atender</h2>
                        <h1>+30.000</h1>
                        <h2>Hectares de calcário por mês</h2>
                    </div>
                    <img src={fleet2} className='fleetCard'/>
                    <img src={fleet1} className='fleetCard'/>
                    <div className='textCard'>
                        <h1>+2 Milhões</h1>
                        <h2>de Hectares atendido</h2>
                    </div>  
                </div>
            </section>

{/*Work Place */}

            <div className='workPlaceContain'>
                <img src={logo} className='wpLogo'/>
                <div className='textContainer'>
                    <div className='wpContainer'>
                        <button className='wpButton'>
                            Onde atuamos
                            <FaCircleArrowRight
                                style={{ fontSize: '50px'}}
                            />
                        </button>
                        <text className='wpText'>
                            De Coromandel - MG para todo o Brasil:
                            <br/>
                            Estamos presentes em todo o território nacional.
                            Faça sua cotação e leve mais resultado para sua produção.
                        </text>
                    </div>
                    <h3 className='region'>
                        Forte atuação nos estados do Maranhão, Tocantins,
                        Pará, Mato Grosso, Bahia, Piauí, Minas Gerais e Goiás.
                    </h3>
                </div>
                <img src={map} className='jmMap'/>
            </div>

{/*Ending */}
            <div className='ending'>
                <div className='eCard'>
                    <h1 className='eText'>
                        Em que podemos ajudar?
                        <br/>
                        Fale com nossa equipe!
                    </h1>
                    <button className='eTalk'>
                        Fale Conosoco
                        <FaCircleArrowRight
                            style={{ color: '#7FBF50', fontSize: '50px'}}
                        />
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Home;