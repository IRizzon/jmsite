import './about.css';

import truckTitle from '../../assets/image/history/truckTitle.jpg';
import tStart from '../../assets/image/history/start.svg';
import tExpand from '../../assets/image/history/expand.svg';
import tActualy from '../../assets/image/history/actualy.svg';
import jm1 from '../../assets/image/history/jm1.svg';
import jm2 from '../../assets/image/history/jm2.svg';
import jm3 from '../../assets/image/history/jm3.svg';
import world from '../../assets/image/history/world.svg';
import bglogo from '../../assets/image/logo.svg';



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
            <section className='history'>
                <div className='hContainer'>
                    <img src={tStart} className='iStart'/>
                    <div className='tStart'>
                        <p>
                            A JM Precisão nasceu do sonho de Juliano Marques, ainda como produtor rural, de adquirir máquinas mais 
                            tecnológicas para melhorar sua produção e também ajudar os vizinhos na região de Coromandel e Guarda-Mor em Minas Gerais.
                            Com muito esforço, começou a atender a região de Catalão, Cristalina, Ipameri e Pires do Rio, ganhando a confiança dos 
                            produtores locais. Um dos marcos da empresa foi um serviço solicitado no Piauí, que inicialmente não pôde ser realizado 
                            por falta de estrutura. Esse desafio, no entanto, impulsionou a JM a investir na frota e se preparar melhor, 
                            e foi assim que a empresa superou esse obstáculo e voltou ainda mais forte.
                        </p>
                        <p>
                            Até 2013, Juliano ainda conciliava as atividades da JM com sua própria lavoura. Por viver as mesmas dificuldades dos 
                            agricultores que atendia, buscou soluções que realmente fizessem diferença no campo. A JM foi construída com base 
                            nesse sentimento de empatia, compromisso e evolução constante, se tornando uma referência em agricultura de precisão, 
                            com um olhar humano e tecnológico voltado para o sucesso de cada cliente.
                        </p>
                    </div>
                </div>
                <div className='hContainer'>
                    <div className='tExpand'>
                        <p>
                            De 2012 a 2016, a empresa fortaleceu suas operações nas regiões já atendidas e expandiu sua atuação para a Bahia, 
                            ampliando o atendimento a clientes em novas fronteiras agrícolas. Em 2016, iniciou uma importante fase de crescimento 
                            no Pará, estado estratégico para o agronegócio nacional.
                        </p>
                        <p>
                            A partir de 2017, com a chegada ao Tocantins e, posteriormente, ao Mato Grosso em 2020, um dos maiores polos agrícolas 
                            do mundo, a JM Precisão atingiu uma marca significativa: passou a operar em mais de 50% do território 
                            brasileiro.
                        </p>
                    </div>
                    <img src={tExpand} className='iExpand'/>
                </div>
                <div className='hContainer'>
                    <img src={tActualy} className='iActualy'/>
                    <div className='tActualy'>
                        Atualmente, a JM Precisão vive um momento de consolidação e expansão. Nossa frota cresceu significativamente nos 
                        últimos anos, tornando-se ainda mais robusta, moderna e preparada para atender grandes áreas com agilidade e precisão. 
                        Com atuação em mais de 50% do território brasileiro, operamos em importantes polos agrícolas do país, levando soluções 
                        técnicas e eficientes para diferentes tipos de culturas e propriedades.
                    </div>
                </div>
                <div className='lastText'>
                    Nosso objetivo é seguir evoluindo com responsabilidade, ampliando nossa presença no campo e investindo continuamente em 
                    tecnologia, capacitação e estrutura. Queremos estar cada vez mais próximos do produtor rural, entregando resultados 
                    consistentes, aplicando com excelência e mantendo o compromisso que sempre nos guiou: transformar produtividade em confiança.
                </div>
                <div className='VVMContainer'>
                    <div className='VVMCard'>
                        <img src={jm1} className='VVMImg'/>
                        <div className='VVMText'>
                            <h1>Missão</h1>
                            <h2>Promover constantemente a melhoria na qualidade e no rendimento da produção agrícola.</h2>
                        </div>
                    </div>
                    <div className='VVMCard'>
                        <img src={jm2} className='VVMImg'/>
                        <div className='VVMText'>
                            <h1>Visão</h1>
                            <h2>Ser reconhecida pela qualidade, confiança e agilidade, com simplicidade e respeito em tudo o que faz no campo.</h2>
                        </div>
                    </div>
                    <div className='VVMCard'>
                        <img src={jm3} className='VVMImg'/>
                        <div className='VVMText'>
                            <h1>Valores</h1>
                            <h2>Ética, honestidade, agilidade, produtividade, qualidade, respeito e excelência.</h2>
                        </div>
                    </div>
                </div>
                <div className='hEnding'>
                    <img src={world} className='world'/>
                    <div className='placeContainer'>
                        <img src={bglogo} className='bglogo'/>
                        <div className='placeText'>
                            <h1>Atendendo em todo o Brasil</h1>
                            <text>
                                Com sede em Coromandel, no Triângulo Mineiro, a JM Precisão leva tecnologia e eficiência para todos os estados 
                                brasileiros. Nossa atuação se concentra principalmente nas regiões com forte presença do agronegócio, como:
                            </text>
                            <ul className='list'>
                                <li>Minas Gerais</li>
                                <li>Goiás</li>
                                <li>Bahia</li>
                                <li>Mato Grosso</li>
                                <li>Maranhão</li>
                                <li>Pará</li>
                                <li>Piauí</li>
                                <li>Tocantins</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;