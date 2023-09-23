import { useRef } from "react"
import axios from "axios"

import "./styles.css"

const Cadastrar = () => {

    const ref = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const pokemon = ref.current;

        if ( !pokemon.nome.value || !pokemon.tipo1.value || !pokemon.tipo2.value ) {
            console.log(pokemon)
            return alert("Preencher todos os campos!");
        }
        await axios
            .post("http://localhost:8080/pokemon", {
                nome: pokemon.nome.value,
                tipo1: pokemon.tipo1.value,
                tipo2: pokemon.tipo2.value,
            })
            .then(({ data }) => alert("Cadastrado com sucesso"))
            .catch(({ data }) => console.log(data));

            pokemon.nome.value = "";
            pokemon.tipo1.value = "";
            pokemon.tipo2.value = "";
    };

  return (
        <form onSubmit={handleSubmit}  ref={ref} >
            <input
                type="text"
                className="inputs"
                placeholder='Digite o Nome do Pokémon'
                name="nome"
            />

            <input
                type="text"
                className="inputs"
                placeholder='Digite o Tipo do Pokémon'
                name="tipo1"
            />

            <input
                type="text"
                className="inputs"
                placeholder='Digite o 2° Tipo do Pokémon'
                name="tipo2"
            />

            <button className="adicionar">Adicionar Pokémon</button>
        </form>
  )
}

export default Cadastrar