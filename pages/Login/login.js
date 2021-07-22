import { useState } from "react";
import axios from "axios";
import { setCookie } from "nookies";
import { Token } from "../../auth";

export default function login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');


    async function logar() {
        var ret = await axios.post('/api/login', { user: usuario, pass: senha });
        if (ret.data) {
            setCookie(null, 'token', ret.data.token, { maxAge: 68 * 68 * 1, path: '/' });
            console.log(Token());
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
                    <div className="flex justify-end mt-2 text-xs text-gray-600">
                        <a href="../../pages/auth/forget_password.html hover:text-black">Esqueceu a senha?</a>
                    </div>
                </div>
                <button onClick={() => logar()} type="button" className="block rounded text-center text-white bg-gray-800 p-3 duration-300 hover:bg-black w-full">Logar</button>
            </form>

        </div>
    </div>


}