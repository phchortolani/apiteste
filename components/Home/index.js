import { styles } from "./styles";
import { useState } from "react";
import axios from "axios";



export default function Home() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');


    function logar() {
        axios.post('/api/inscrever', { user: usuario, pass: senha });
    }

    return <div style={styles.cardlogin}>
        <label htmlFor="user">Usuário:</label>
        <input onInput={(value) => setUsuario(value.target.value)} id="user"></input>
        <label htmlFor="pass">Senha:</label>
        <input onInput={(value) => setSenha(value.target.value)} id="pass"></input>
        <button onClick={() => logar()}>Logar</button>

        <a href="">Criar usuário</a>
    </div>

}