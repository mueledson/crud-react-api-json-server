import "./styles.css"
import Cadastrar from "./Cadastrar"
import Listar from "./Listar"

const Pokemon = () => {

    return (
        <div className="container">
            <h1>Pokémon</h1><br />
            <Cadastrar />
            <Listar />
        </div>
    )
}

export default Pokemon
