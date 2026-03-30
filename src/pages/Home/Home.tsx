import "./Home.css";
import prestadores from "../../data/prestadores.json";
import { CardPrestador } from "../../components/CardPrestador/CardPrestador";
import { Prestador } from "../../types/Prestador";

function Home() {
    return (
        <main className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>
                        Conectando proffissionais e voluntários<br />
                        por um mundo melhor
                    </h1>

                    <p>
                        Encontre prestadores de serviços qualificados e oportunidades de
                        voluntariado que fortalecem comunidades.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">Explorar Prestadores</button>
                        <button className="btn-secondary">Ver Ações Sociais</button>
                    </div>
                </div>
            </section>

            {/* PRESTADORES EM DESTAQUE */}
            <section className="destaque">
                <h2>Prestadores em destaque</h2>

                <div className="grid-prestadores">
                    {(prestadores as Prestador[]).map((prestador) => (
                        <CardPrestador key={prestador.id} prestador={prestador} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;