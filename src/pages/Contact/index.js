import './contact.css';

function Contact() {
    return (
        <section className='section-contact'>
            <h1>Contate-nos</h1>
            <text>
                Este canal é dedicado a você! Use-o como ouvidoria, para solicitar orçamentos ou enviar sugestões. 
                <br/>
                Estamos aqui para oferecer o melhor atendimento possível.
                A equipe da JM agradece o seu contato!
            </text>
            <form>
                <input
                    type="text"
                    name="nome"
                    className="name"
                    placeholder="Nome:"
                    required
                />
                <div className='contactForm'>
                    <input
                        type="email"
                        name="email"
                        className="email"
                        placeholder="E-Mail:"
                        required
                    />
                    <input
                        type="tel"
                        name="celular"
                        className="cell"
                        placeholder="Celular:"
                        required
                    />
                </div>
                <input
                    type="text"
                    name="assunto"
                    className="nameD"
                    placeholder="Assunto:"
                />
                <textarea
                    className="description"
                    name="descricao"
                    placeholder="Descrição:"
                    rows={10}
                    cols={50}
                    maxLength={500}
                    required
                />
                <button type="submit" className='btContact'>Enviar</button>
            </form>
        </section>
    );
}

export default Contact;