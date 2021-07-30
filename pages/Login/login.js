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

    return <div className="bg-white lg:w-4/12 md:6/12 rounded shadow-md w-10/12 m-auto my-10">
        <div className="py-8 px-8 rounded-xl">
            <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
            <form action="" className="mt-6">
                <div className="my-5 text-sm">
                    <label htmlFor="username" className="block text-black">Usuário</label>
                    <input type="text" onInput={(value) => setUsuario(value.target.value)} autoFocus id="username" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Usuário" />
                </div>
                <div className="my-5 text-sm">
                    <label htmlFor="password" className="block text-black">Senha</label>
                    <input onInput={(value) => setSenha(value.target.value)} type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Senha" />
                </div>
                <button onClick={() => handleSignIn()} type="button" className="block rounded text-center text-white bg-gray-800 p-3 duration-300 hover:bg-black w-full">Logar</button>
            </form>
            <p className="text-red-600">{authError}</p>
        </div>
    </div>


}