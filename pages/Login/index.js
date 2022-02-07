import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth2Context";
import { parseCookies } from "nookies";

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
    let sizelogo = 100;

    return (<div className="login">
        <div className="">
            <img width={sizelogo} height={sizelogo} src="/logoDara.svg" className="w-100"></img>
        </div>
        <hr></hr>
        <form >
            <input onChange={(e) => setUsuario(e.target.value)} className="loginbtns" type="text" name="u" placeholder="Usuário" required="required" />
            <input onChange={(e) => setSenha(e.target.value)} className="loginbtns" type="password" name="p" placeholder="Senha" required="required" />
            <hr></hr>
            <button onClick={() => handleSignIn()} type="button" className="btn btn-primary btn-block btn-large w-100">Logar</button>
            <p className="text-danger">{authError}</p>
        </form>
    </div>
    )

}

export async function getServerSideProps(ctx) {

    const { token } = parseCookies(ctx);

    if (token) {
        return {
            redirect: {
                destination: '/Dashboard',
                permanent: false
            }
        }
    }


    return {
        props: {}, // will be passed to the page component as props
    }
}