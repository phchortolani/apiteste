import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth2Context";

export default function login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [authError, setAuthError] = useState('');
    const { signIn } = useContext(AuthContext);

    async function handleSignIn() {
        setAuthError("");
        if (usuario != "" && senha != "") {
            setAuthError(await signIn(usuario, senha));
        } else {
            setAuthError("Insira o usuário e a senha.")
        }

    }

    return (<div className="login">
        <h1>Login2</h1>
        <form >
            <input onChange={(e) => setUsuario(e.target.value)} className="loginbtns" type="text" name="u" placeholder="Usuário" required="required" />
            <input onChange={(e) => setSenha(e.target.value)} className="loginbtns" type="password" name="p" placeholder="Senha" required="required" />
            <button onClick={() => handleSignIn()} type="button" className="btn btn-primary btn-block btn-large">Logar</button>
            <p className="text-danger">{authError}</p>
        </form>
    </div>
    )

}