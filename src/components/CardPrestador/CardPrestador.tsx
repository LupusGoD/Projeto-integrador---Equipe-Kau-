import type { Prestador } from "../../types/Prestador";
import "./CardPrestador.css";

interface Props {
    prestador: Prestador;
}

export function CardPrestador({ prestador }: Props) {
    return (
        <div className="card-prestador">
          <img src={prestador.imagem} alt={prestador.nome} />

          <div className="card-content">
            <h3>{prestador.nome}</h3>
            <span className="categoria">{prestador.categoria}</span>

            <p>{prestador.descricao}</p>

            <div className="card-footer">
              <span className="bairro">{prestador.bairro}</span>
              <span className="nota">{prestador.nota}</span>
            </div>

            <button className="btn-primary">Ver perfil</button>
          </div>
        </div>
    );
}