import { Link } from "react-router";

function Home() {
    return (
        <div>
            <h2>Seja Bem vindo a Home!</h2>
            <Link to = "/cadastro">Faça seu cadastro</Link>
        </div>
    )
}

export default Home;